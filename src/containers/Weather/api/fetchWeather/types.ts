export interface FetchWeatherParams {
  latitude: number;
  longitude: number;
}

export interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: Array<{
    icon: string;
    description: string;
  }>;
  sys: {
    country: string;
  };
}
