export interface LocationState {
  locations: LocationData[];
  selectedLocation: LocationData | null;
}

export interface LocationData {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: {
    lon: number;
    lat: number;
  };
}
