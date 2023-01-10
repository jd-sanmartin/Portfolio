import { useContext, useState, useCallback } from 'react';
import { MapContext } from '../../pages/map';

import { GoogleMap, useJsApiLoader, Marker, Polygon, Polyline } from '@react-google-maps/api';

import Box from '@mui/material/Box';
import Point from '../../types/map/Point';

import MapButtons from './MapButtons';
import mapStyles from '../../utils/MapStyles';

let svgPolygonMarker: string | google.maps.Icon | google.maps.Symbol | undefined;
let svgObstacleMarker: string | google.maps.Icon | google.maps.Symbol | undefined;
let svgPolylineMarker: string | google.maps.Icon | google.maps.Symbol | undefined;

export default function MapContainer() {
  const mapContext = useContext(MapContext);
  const {
    drawMode,
    setDrawMode,

    polygonCoordinates,
    pushPolygonCoordinates,
    updatePolygonCoordinatesAt,

    polylineCoordinates,
    pushPolylineCoordinates,
    updatePolylineCoordinatesAt,

    obstacleCoordinates,
    pushObstacleCoordinates,
    updateObstacleCoordinatesAt,
  } = mapContext;

  const center = { lat: 6.345228512607375, lng: -75.51272415176523 }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    mapIds: ['map-01'],
  });

  const [map, setMap] = useState(null);
  
  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    map.setOptions({styles: mapStyles});

    setMap(map);

    svgPolygonMarker = {
      path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
      fillColor: 'purple',
      fillOpacity: 1,
      strokeWeight: 0.5,
      rotation: 0,
      scale: 0.8,
      anchor: new google.maps.Point(0, 0),
      labelOrigin: new google.maps.Point(0, -25),
    };
    
    svgPolylineMarker = {
      path: 'M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0',
      fillColor: 'purple',
      fillOpacity: 0.8,
      strokeWeight: 0.5,
      rotation: 0,
      scale: 0.2,
      anchor: new google.maps.Point(100, 100),
      labelOrigin: new google.maps.Point(100, 100),
    };
    
    svgObstacleMarker = {
      path: 'M15.4102 42.3887L5.56076 32.1812C5.20103 31.8083 5 31.3105 5 30.7924V17.2076C5 16.6895 5.20103 16.1917 5.56076 15.8188L15.4102 5.61126C15.7871 5.22064 16.3066 5 16.8494 5H31.1506C31.6934 5 32.2129 5.22064 32.5898 5.61126L42.4392 15.8188C42.799 16.1917 43 16.6895 43 17.2076V30.7924C43 31.3105 42.799 31.8083 42.4392 32.1812L32.5898 42.3887C32.2129 42.7794 31.6934 43 31.1506 43H16.8494C16.3066 43 15.7871 42.7794 15.4102 42.3887Z',
      fillColor: '#c9274B',
      fillOpacity: 1,
      strokeWeight: 0.5,
      rotation: 0,
      scale: 0.8,
      anchor: new google.maps.Point(25, 25),
      labelOrigin: new google.maps.Point(24, 24),
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null)
  }, []);

  const handlePolygonPointDragEnd = (index: number, e: google.maps.MapMouseEvent) => {
    if (e.latLng?.lat() !== undefined && e.latLng?.lng() !== undefined) {
      const coords: Point = {lat: e.latLng!.lat(), lng: e.latLng!.lng()};
      updatePolygonCoordinatesAt(index, coords);
    }
  };

  const handlePolylinePointDragEnd = (index: number, e: google.maps.MapMouseEvent) => {
    if (e.latLng?.lat() !== undefined && e.latLng?.lng() !== undefined) {
      const coords: Point = {lat: e.latLng!.lat(), lng: e.latLng!.lng()};
      updatePolylineCoordinatesAt(index, coords);
    }
  };

  const handleObstaclePointDragEnd = (index: number, e: google.maps.MapMouseEvent) => {
    if (e.latLng?.lat() !== undefined && e.latLng?.lng() !== undefined) {
      const coords: Point = {lat: e.latLng!.lat(), lng: e.latLng!.lng()};
      updateObstacleCoordinatesAt(index, coords);
    }
  };

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    setDrawMode('polygon');
    if (e.latLng?.lat() !== undefined && e.latLng?.lng() !== undefined) {
      const coords: Point = {lat: e.latLng!.lat(), lng: e.latLng!.lng()};
      pushPolygonCoordinates(coords);
    }
  }

  const handlePolygonClick = (e: google.maps.MapMouseEvent) => {
    switch (drawMode) {
      case 'polygon':
        setDrawMode('polyline');
      case 'polyline':
        if (e.latLng?.lat() !== undefined && e.latLng?.lng() !== undefined) {
          const coords: Point = {lat: e.latLng!.lat(), lng: e.latLng!.lng()};
          pushPolylineCoordinates(coords);
        }

        break;
      case 'obstacle':
        if (e.latLng?.lat() !== undefined && e.latLng?.lng() !== undefined) {
          const coords: Point = {lat: e.latLng!.lat(), lng: e.latLng!.lng()};
          pushObstacleCoordinates(coords);
        }

        break;
    }
  }

  return ( 
    <Box sx={{height: '100%', width: '100%', position: 'relative'}}>
      {
        isLoaded ? 
        (
          <>
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%' }}
              center={center}
              zoom={13}
              onLoad={onLoad}
              onUnmount={onUnmount}
              onClick={(e) => handleMapClick(e)}
              options={{
                streetViewControl: false,
                disableDefaultUI: true,
              }}
            >
              {
                polygonCoordinates.map((coords, i) => (
                  <Marker
                    key={`polygon-marker-${i}`}
                    position={coords}
                    draggable
                    label={{text: (i + 1).toString(), color: 'white', }}
                    onDragEnd={(e) => handlePolygonPointDragEnd(i, e)}
                    icon={svgPolygonMarker}
                  />
                ))
              }

              {
                polygonCoordinates.length > 0 && (
                  <Polygon 
                    path={polygonCoordinates}
                    options={{
                      strokeColor: '#44e',
                      fillColor: '#229',
                      fillOpacity: 0.6
                    }}
                    onClick={(e) => handlePolygonClick(e)}
                  />
                )
              }

              {
                polylineCoordinates.map((coords, i) => (
                  <Marker
                    key={`polyline-marker-${i}`}
                    position={coords}
                    draggable
                    label={{text: (i + 1).toString(), color: 'white', }}
                    onDragEnd={(e) => handlePolylinePointDragEnd(i, e)}
                    icon={svgPolylineMarker}
                  />
                ))
              }

              {
                polylineCoordinates.length > 0 && (
                  <Polyline 
                    path={polylineCoordinates}
                    options={{
                      strokeColor: '#ccc',
                    }}
                  />
                )
              }

              {
                obstacleCoordinates.map((coords, i) => (
                  <Marker
                    key={`obstacle-marker-${i}`}
                    position={coords}
                    draggable
                    label={{text: (i + 1).toString(), color: 'white', }}
                    onDragEnd={(e) => handleObstaclePointDragEnd(i, e)}
                    icon={svgObstacleMarker}
                  />
                ))
              }
            </GoogleMap>

            <MapButtons />
          </>
          
        )
        : <>Loading...</>
      }
    </Box>
  );
}
