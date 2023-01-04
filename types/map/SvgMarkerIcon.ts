interface Point {
  x: number;
  y: number;
}

interface SvgMarkerIcon {
  path: string;
  fillColor?: string;
  fillOpacity: number;
  strokeWeight?: number;
  rotation?: number,
  scale?: number,
  anchor: Point,
  labelOrigin: Point,
}

export default SvgMarkerIcon;
