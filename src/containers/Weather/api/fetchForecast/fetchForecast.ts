import axios from 'axios';

import { API_KEY, BASE_URL } from '../../../../config';
import { ForecastData } from './types';

const ENDPOINT = 'onecall';

export const fetchForecast = async (latitude: number, longitude: number) =>
  await axios.get<ForecastData>(
    `${BASE_URL}${ENDPOINT}?units=metric&exclude=minutely,hourly,alerts,current&appid=${API_KEY}&lat=${latitude}&lon=${longitude}`,
  );
