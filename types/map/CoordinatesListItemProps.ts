import Coordinates from './Point';

interface CoordinatesListItemProps {
    index: number;
    name?: string;
    coordinates: Coordinates;

    deleteAction?(index: number): void;
}

export default CoordinatesListItemProps;
