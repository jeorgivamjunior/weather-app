import React, { useEffect, useState } from 'react';

import { List, ListItem } from '@material-ui/core';

import { LocationData } from '../../slice';
import { LocationItem } from './LocationItem';
import { LocationListProps } from './types';

const LocationList: React.FC<LocationListProps> = ({ locations, selectedLocation, setParentSelectedLocation, onRemoveLocation: onRemoveOption }) => {
  const [localSelectedLocation, setLocalSelectedLocation] = useState<LocationData | undefined | null>(selectedLocation);

  useEffect(() => {
    if (!localSelectedLocation) return;
    console.log('selecting', localSelectedLocation);
    setParentSelectedLocation(localSelectedLocation);
  }, [localSelectedLocation]);

  return (
    <List>
      {!locations.length && (
        <ListItem divider button>
          <LocationItem noData location={{} as LocationData} />
        </ListItem>
      )}

      {locations.map((location) => (
        <ListItem
          key={location.id}
          divider
          button
          selected={localSelectedLocation?.id === location.id}
          onClick={() => setLocalSelectedLocation(location)}
        >
          <LocationItem location={location} selectedLocation={localSelectedLocation} onRemoveOption={onRemoveOption} />
        </ListItem>
      ))}
    </List>
  );
};

export default LocationList;
