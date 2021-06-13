import { LocationData } from '../../slice';

export interface LocationAutocompleteProps {
  locations: LocationData[];
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  onAddSelectedLocation: (location: LocationData) => void;
}
