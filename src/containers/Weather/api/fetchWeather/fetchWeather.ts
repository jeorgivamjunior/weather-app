import axios from 'axios';

import { API_KEY, BASE_URL } from '../../../../config';
import { WeatherData } from './types';

const ENDPOINT = 'weather';

export const fetchWeather = async (latitude: number, longitude: number) =>
  await axios.get<WeatherData>(
    `${BASE_URL}${ENDPOINT}?units=metric&exclude=minutely,hourly,alerts&appid=${API_KEY}&lat=${latitude}&lon=${longitude}`,
  );
