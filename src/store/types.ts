import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { LocationState } from '../containers/Location/slice/types';

export interface RootState {
  locationSlice: LocationState;
}
