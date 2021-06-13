const isProduction = process.env.NODE_ENV === 'production';

export const BASE_URL = `${isProduction ? 'https' : 'http'}://api.openweathermap.org/data/2.5/`;

export const API_KEY = process.env.REACT_APP_API_KEY;

export const ICON_URL = `${isProduction ? 'https' : 'http'}://openweathermap.org/img/w`;
