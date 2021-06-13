import React from 'react';

import { Grid } from '@material-ui/core';

import { ForecastItem } from './ForecastItem';
import { ForecastProps } from './types';

const Forecast: React.FC<ForecastProps> = ({ forecast }) => {
  return (
    <Grid container justify="center" spacing={3}>
      {forecast.map((daily) => (
        <Grid key={daily.dt} item md>
          <ForecastItem daily={daily} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Forecast;
