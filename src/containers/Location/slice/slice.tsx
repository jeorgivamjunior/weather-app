import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LocationData, LocationState } from './types';

const initialState: LocationState = {
  locations: [],
  selectedLocation: null,
};

export const locationSlice = createSlice({
  name: 'locationSlice',
  initialState,
  reducers: {
    unselectLocation: (state) => {
      state.selectedLocation = null;
    },
    selectLocation: (state, action: PayloadAction<LocationData>) => {
      state.selectedLocation = action.payload;
    },
    addLocation: (state, action: PayloadAction<LocationData>) => {
      state.locations.push(action.payload);
    },
    removeLocation: (state, action: PayloadAction<LocationData>) => {
      state.locations = state.locations.filter((location) => location.id !== action.payload.id);
      if (action.payload.id === state.selectedLocation?.id) {
        state.selectedLocation = null;
      }
    },
  },
});

export const { selectLocation, addLocation, removeLocation, unselectLocation } = locationSlice.actions;
