import React, { useEffect, useState } from 'react';

import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

import Header from '../../components/Header';
import LocationAutocomplete from './components/LocationAutocomplete';
import LocationList from './components/LocationList';
import { addLocation, LocationData, locationsSelector, removeLocation, selectedLocationSelector, selectLocation, unselectLocation } from './slice';

const Location: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const locations = useSelector(locationsSelector);
  const selectedLocation = useSelector(selectedLocationSelector);

  const [searchText, setSearchText] = useState('');
  const [localSelectedLocation, setLocalSelectedLocation] = useState<LocationData | undefined | null>();
  const [locationList, setLocationList] = useState<LocationData[]>([]);

  useEffect(() => {
    if (searchText.length > 3) {
      (async () => {
        const response = await axios.get<LocationData[]>('data/city.list.json');
        const filteredOptions = response.data.filter((city) => city.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
        setLocationList(filteredOptions);
      })();
    }
  }, [searchText]);

  const onAddSelectedLocation = (selectedLocationOption: LocationData) => {
    dispatch(addLocation(selectedLocationOption));
    toast.success('Location added');
    setSearchText('');
  };

  const onRemoveLocation = (selectedLocationOption: LocationData) => {
    dispatch(removeLocation(selectedLocationOption));
    toast.warning('Location removed');
  };

  const onSetSelectedLocation = () => {
    if (!localSelectedLocation) return;

    dispatch(selectLocation(localSelectedLocation));
    history.goBack();
    toast.success('New location selected');
  };

  const onUnsetSelectedLocation = () => {
    dispatch(unselectLocation());
    toast.info('Selected location removed. Using current location');
    history.goBack();
  };

  return (
    <>
      <Header hasBackButton={true}>Locations</Header>

      <Container maxWidth="sm">
        <Grid container direction="column">
          <Grid item>
            <LocationAutocomplete locations={locationList} setSearchText={setSearchText} onAddSelectedLocation={onAddSelectedLocation} />
          </Grid>
          <Grid item>
            <Box marginTop={10}>
              <Typography variant="h6">Locations</Typography>
              <LocationList
                locations={locations}
                selectedLocation={selectedLocation}
                setParentSelectedLocation={setLocalSelectedLocation}
                onRemoveLocation={onRemoveLocation}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box marginTop={5}>
              <Button fullWidth variant="outlined" color="primary" onClick={onSetSelectedLocation} disabled={!localSelectedLocation}>
                Use selected location
              </Button>
            </Box>
            <Box marginTop={2}>
              <Button fullWidth variant="contained" color="primary" onClick={onUnsetSelectedLocation}>
                Use Current Location (GPS)
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Location;
