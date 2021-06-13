export interface FetchForecastParams {
  latitude: number;
  longitude: number;
}

export interface ForecastData {
  daily: DailyData[];
}

export interface DailyData {
  dt: number;
  temp: { min: number; max: number; day: number };
  weather: [{ description: string; icon: string }];
}
