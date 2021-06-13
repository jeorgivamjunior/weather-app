import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Location from '../containers/Location';
import Weather from '../containers/Weather';
import { NotFound } from './NotFound';

export const RouterConfig: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Weather />
      </Route>

      <Route exact path="/locations">
        <Location />
      </Route>

      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};
