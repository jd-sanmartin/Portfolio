// COMM: This page contains the side menu (which is hidden when hitting the md breakpoint and a map)

import Head from "next/head";

import { useState, createContext } from 'react';

import { useMediaQuery, useTheme } from "@mui/material";

import Grid from "@mui/material/Grid/Grid";

import SideMenu from "../components/map/SideMenu";
import MapContainer from "../components/map/MapContainer";
import HelpModal from "../components/map/HelpModal";

import Point from "../types/map/Point";
import MapContextProps from "../types/map/MapContextProps";

export const MapContext = createContext<MapContextProps>(null!);

export default function Map() {
  const theme = useTheme();

  const [openHelpModal, setOpenHelpModal] = useState(true);

	const [polygonCoordinates, setPolygonCoordinates] = useState<Point[]>([]);

	const [drawMode, setDrawMode] = useState<"polygon" | "polyline" | "obstacle" | "none">('polygon');
	
	const [polylineCoordinates, setPolylineCoordinates] = useState<Point[]>([]);
	const [obstacleCoordinates, setObstacleCoordinates] = useState<Point[]>([]);

  // COMM: Is there a way to avoid doing all these declarations?
  // I can't move them because they all depend on useState variables created inside this component

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
		<>
			<Head>
				<title>Map</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MapContext.Provider value={mapContextData}>
				<Grid container sx={{ height: 'calc(100vh - 70px)' }}>

          {useMediaQuery(theme.breakpoints.up("md")) &&
            (
              <Grid item md={3} sx={{ maxHeight: 'calc(100vh - 64px)' }}>
                <SideMenu />
              </Grid>
            )        
          }

					<Grid item xs={12} sm={12} md={9} height='100%'>
						<MapContainer />
					</Grid>

          <HelpModal />
				</Grid>
			</MapContext.Provider>
		</>
	)
}
