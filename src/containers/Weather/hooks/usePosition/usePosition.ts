import { useState, useEffect } from 'react';

import { UsePositionData } from './types';

const defaultLatitude = 38.7259284;
const defaultLongitude = -9.137382;

export const usePosition = () => {
  const [position, setPosition] = useState<UsePositionData>({
    latitude: defaultLatitude,
    longitude: defaultLongitude,
  });

  const onChange = ({ coords }: GeolocationPosition) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };

  const onError = () => {
    console.log('error getting location');
  };

  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      return;
    }

    const watcher = geolocation.watchPosition(onChange, onError);

    return () => geolocation.clearWatch(watcher);
  }, []);

  return { ...position };
};
