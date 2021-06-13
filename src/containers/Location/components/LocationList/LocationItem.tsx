import React from 'react';

import { Button, ListItemIcon, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';

import { LocationItemProps } from './types';

export const LocationItem: React.FC<LocationItemProps> = ({ location, selectedLocation, noData, onRemoveOption }) => {
  const onRemove = () => {
    if (!selectedLocation || !onRemoveOption) return;

    onRemoveOption(selectedLocation);
  };

  if (noData) {
    return (
      <>
        <ListItemIcon>
          <PersonPinCircleIcon />
        </ListItemIcon>
        <ListItemText primary="No locations added" />
      </>
    );
  }

  return (
    <>
      <ListItemIcon>
        <PersonPinCircleIcon />
      </ListItemIcon>
      <ListItemText primary={location.name} secondary={selectedLocation?.id === location.id ? 'SELECTED' : ''} />
      <ListItemSecondaryAction>
        <Button color="primary" onClick={onRemove}>
          Remove
        </Button>
      </ListItemSecondaryAction>
    </>
  );
};
