import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';

import { locationSlice } from '../containers/Location/slice';

const persistConfig = {
  key: 'root',
  storage: localStorage,
};

const appReducer = combineReducers({
  locationSlice: locationSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
