import { RootState } from '../../../store';

export const locationsSelector = ({ locationSlice }: RootState) => locationSlice.locations;

export const selectedLocationSelector = ({ locationSlice }: RootState) => locationSlice.selectedLocation;
