import { DailyData, ForecastData } from '../../api/fetchForecast';

export interface ForecastProps {
  forecast: DailyData[];
}

export interface ForecastItemProps {
  daily: DailyData;
}
