import React, { useEffect, useState } from 'react';

import { Button, CircularProgress, Container, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import { fetchWeather, selectedLocationSelector, WeatherData } from '../Location';
import { DailyData, fetchForecast, ForecastData } from './api/fetchForecast';
import Forecast from './components/Forecast';
import LocationInfo from './components/LocationInfo';
import WeatherInfo from './components/WeatherInfo';
import { usePosition } from './hooks/usePosition/usePosition';

const useStyles = makeStyles((theme: Theme) => ({
  forecastWrapper: {
    width: '100%',
  },
  container: {
    marginTop: theme.spacing(3),
  },
}));

function Weather() {
  const classes = useStyles();
  const position = usePosition();

  const selectedLocation = useSelector(selectedLocationSelector);

  const [weather, setWeather] = useState<WeatherData>();
  const [forecast, setForecast] = useState<DailyData[]>();
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [forecastLoading, setForecastLoading] = useState(true);

  const currentDate = new Date();

  useEffect(() => {
    let { latitude, longitude } = position;

    if (selectedLocation) {
      latitude = selectedLocation.coord.lat;
      longitude = selectedLocation.coord.lon;
    }

    (async () => {
      const response = await fetchWeather(latitude, longitude);
      setWeather(response.data);
      setWeatherLoading(false);
    })();
  }, [position.latitude, position.longitude]);

  useEffect(() => {
    let { latitude, longitude } = position;

    if (selectedLocation) {
      latitude = selectedLocation.coord.lat;
      longitude = selectedLocation.coord.lon;
    }

    (async () => {
      const {
        data: { daily },
      } = await fetchForecast(latitude, longitude);
      daily.shift();
      setForecast(daily);
      setForecastLoading(false);
    })();
  }, [position.latitude, position.longitude]);

  return (
    <>
      <Header>
        <Button component={Link} to={'/locations'} color="primary" variant="contained" disableElevation={true} endIcon={<ExpandMoreIcon />}>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="caption">Selected location</Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">
                {selectedLocation ? `${selectedLocation?.name}, ${selectedLocation?.country}` : 'Current Location (GPS)'}
              </Typography>
            </Grid>
          </Grid>
        </Button>
      </Header>

      <Container component="main" maxWidth="md" className={classes.container}>
        <Grid container direction="column" alignItems="center" spacing={5}>
          {weatherLoading && (
            <Grid item>
              <CircularProgress />
            </Grid>
          )}

          {!weatherLoading && weather && (
            <>
              <Grid item>
                <LocationInfo location={`${weather.name}, ${weather.sys.country}`} date={currentDate.toDateString()} />
              </Grid>
              <Grid item>
                <WeatherInfo temperature={weather.main.temp} icon={weather.weather[0].icon} description={weather.weather[0].description} />
              </Grid>
            </>
          )}

          {forecastLoading && (
            <Grid item>
              <CircularProgress />
            </Grid>
          )}

          {!forecastLoading && forecast && (
            <Grid item className={classes.forecastWrapper}>
              <Forecast forecast={forecast} />
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
}

export default Weather;
