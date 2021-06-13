import { LocationData } from '../../slice';

export interface LocationListProps {
  locations: LocationData[];
  selectedLocation?: LocationData | null;
  setParentSelectedLocation: (location: LocationData) => void;
  onRemoveLocation?: (location: LocationData) => void;
}

export interface LocationItemProps {
  location: LocationData;
  selectedLocation?: LocationData | null;
  noData?: boolean;
  onRemoveOption?: (location: LocationData) => void;
}
