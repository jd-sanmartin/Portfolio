import { useState, createContext, useContext } from 'react';

import MapContextProps from '../../types/map/MapContextProps';
import Point from '../../types/map/Point';

const MapContext = createContext<MapContextProps>(null!);

export function useMap() {
  return useContext(MapContext);
}

interface props {
  children: JSX.Element;
}

export function MapProvider({ children } : props) {
  const [openHelpModal, setOpenHelpModal] = useState(true);

  const [polygonCoordinates, setPolygonCoordinates] = useState<Point[]>([]);

  const [drawMode, setDrawMode] = useState<"polygon" | "polyline" | "obstacle" | "none">('polygon');

  const [polylineCoordinates, setPolylineCoordinates] = useState<Point[]>([]);
  const [obstacleCoordinates, setObstacleCoordinates] = useState<Point[]>([]);

  const pushPolygonCoordinates = (coord: Point) => {
    setPolygonCoordinates([...polygonCoordinates, coord]);
  }

  const updatePolygonCoordinatesAt = (index: number, coord: Point) => {
    let newCoordinates: Point[] = [...polygonCoordinates];
    
    newCoordinates[index] = coord;
    setPolygonCoordinates(newCoordinates);
  }

  const deletePolygonCoordinatesAt = (index: number) => {
    setPolygonCoordinates(polygonCoordinates.filter((x, i) => i !== index));
  }

  const pushPolylineCoordinates = (coord: Point) => {
    setPolylineCoordinates([...polylineCoordinates, coord]);
  }

  const updatePolylineCoordinatesAt = (index: number, coord: Point) => {
    let newCoordinates: Point[] = [...polylineCoordinates];

    newCoordinates[index] = coord;
    setPolylineCoordinates(newCoordinates);
  }

  const deletePolylineCoordinatesAt = (index: number) => {
    setPolylineCoordinates(polylineCoordinates.filter((x, i) => i !== index));
  }

  const pushObstacleCoordinates = (coord: Point) => {
    setObstacleCoordinates([...obstacleCoordinates, coord]);
  }

  const updateObstacleCoordinatesAt = (index: number, coord: Point) => {
    let newCoordinates: Point[] = [...obstacleCoordinates];

    newCoordinates[index] = coord;
    setObstacleCoordinates(newCoordinates);
  }

  const deleteObstacleCoordinatesAt = (index: number) => {
    setObstacleCoordinates(obstacleCoordinates.filter((x, i) => i !== index));
  }

  const mapContextData: MapContextProps = {
    drawMode,
    setDrawMode,

    openHelpModal,
    setOpenHelpModal,

    polygonCoordinates,
    polylineCoordinates,
    obstacleCoordinates,

    pushPolygonCoordinates,
    updatePolygonCoordinatesAt,
    deletePolygonCoordinatesAt,

    pushPolylineCoordinates,
    updatePolylineCoordinatesAt,
    deletePolylineCoordinatesAt,

    pushObstacleCoordinates,
    updateObstacleCoordinatesAt,
    deleteObstacleCoordinatesAt,
  };

  return (
    <MapContext.Provider value={mapContextData}>
      {children}
    </MapContext.Provider>
  );
}