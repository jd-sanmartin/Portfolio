import Point from "./Point";

interface MapContextProps {
	drawMode: 'polygon' | 'polyline' | 'obstacle' | 'none';

	openHelpModal: boolean;

	polygonCoordinates: Point[];
	polylineCoordinates: Point[];
	obstacleCoordinates: Point[];

	setOpenHelpModal(open: boolean): void;

	setDrawMode(mode: 'polygon' | 'polyline' | 'obstacle' | 'none' ): void;

	pushPolygonCoordinates(coord: Point): void;
	updatePolygonCoordinatesAt(index: number, coord: Point): void;
	deletePolygonCoordinatesAt(index: number): void;

	pushPolylineCoordinates(coord: Point): void;
	updatePolylineCoordinatesAt(index: number, coord: Point): void;
	deletePolylineCoordinatesAt(index: number): void;

	pushObstacleCoordinates(coord: Point): void;
	updateObstacleCoordinatesAt(index: number, coord: Point): void;
	deleteObstacleCoordinatesAt(index: number): void;
}

export default MapContextProps;