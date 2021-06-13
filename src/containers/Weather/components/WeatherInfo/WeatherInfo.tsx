import React from 'react';

import { Avatar, Card, CardContent, ListItem, ListItemAvatar, ListItemText, makeStyles, Theme, Typography } from '@material-ui/core';

import { ICON_URL } from '../../../../config';
import { WeatherInfoProps } from './types';

const useStyles = makeStyles((theme: Theme) => ({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  capitalize: {
    textTransform: 'capitalize',
  },
}));

const WeatherInfo: React.FC<WeatherInfoProps> = ({ icon, description, temperature }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <ListItem component="div">
          <ListItemAvatar>
            <Avatar className={classes.large} src={`${ICON_URL}/${icon}.png`} />
          </ListItemAvatar>
          <ListItemText>
            <Typography variant="h2">{parseInt(temperature.toString())}º</Typography>
            <Typography variant="h6" className={classes.capitalize}>
              {description}
            </Typography>
          </ListItemText>
        </ListItem>
      </CardContent>
    </Card>
  );
};

export default WeatherInfo;
