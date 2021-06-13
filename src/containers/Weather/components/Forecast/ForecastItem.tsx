import React from 'react';

import { Avatar, Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';

import { ICON_URL } from '../../../../config';
import { formatDate } from '../../../../utils/formatDate';
import { ForecastItemProps } from './types';

const useStyles = makeStyles(() => ({
  avatarWrapper: {
    margin: '0 auto',
  },
}));

export const ForecastItem: React.FC<ForecastItemProps> = ({ daily: { dt, temp, weather } }) => {
  const classes = useStyles();

  const date = new Date(dt * 1000);

  return (
    <Card>
      <CardContent>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="body2" align="center">
              {formatDate(date.toDateString(), 'dd MMM')}
            </Typography>
            <Typography variant="body2" align="center">
              {formatDate(date.toDateString(), 'EEE')}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatarWrapper} src={`${ICON_URL}/${weather[0].icon}.png`} />
          </Grid>
          <Grid item>
            <Typography variant="body2" align="center">
              {parseInt(temp.day.toString())}º
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
