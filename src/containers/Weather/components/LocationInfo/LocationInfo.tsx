import React from 'react';

import { Card, CardContent, makeStyles, Theme, Typography } from '@material-ui/core';

import { formatDate } from '../../../../utils/formatDate';
import { LocationInfoProps } from './types';

const useStyles = makeStyles((theme: Theme) => ({
  locationWrapper: {
    fontWeight: 'bold',
  },
}));

const LocationInfo: React.FC<LocationInfoProps> = ({ location, date }) => {
  const classes = useStyles();

  const weekDay = formatDate(date, 'EEEE');
  const dayMonth = formatDate(date, 'dd MMMM');

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" align="center" className={classes.locationWrapper}>
          {location}
        </Typography>
        <Typography variant="h6" align="center">
          {weekDay}, {dayMonth}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LocationInfo;
