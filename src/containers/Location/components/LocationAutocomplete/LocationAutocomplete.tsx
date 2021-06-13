import React, { useEffect, useState } from 'react';

import { Box, Card, CardContent, CircularProgress, InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Autocomplete } from '@material-ui/lab';

import { LocationData } from '../../slice';
import { LocationAutocompleteProps } from './types';

const LocationAutocomplete: React.FC<LocationAutocompleteProps> = ({ locations, setSearchText, onAddSelectedLocation }) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<LocationData[]>(locations);
  const loading = open && options.length === 0;

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  useEffect(() => {
    setOptions(locations);
  }, [locations]);

  const onOptionSelection = (_: React.ChangeEvent<{}>, value: LocationData | null) => {
    if (!value) return;

    onAddSelectedLocation(value);
  };

  const onInputChanges = (_: React.ChangeEvent<{}>, value: string) => {
    setSearchText(value);
  };

  return (
    <Box marginTop={5}>
      <Card>
        <CardContent>
          <Autocomplete
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            getOptionSelected={(option, value) => option.id === value.id}
            getOptionLabel={(option) => `${option.name}, ${option.country}`}
            options={options}
            loading={loading}
            onChange={onOptionSelection}
            onInputChange={onInputChanges}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Start typing at least 4 characters"
                variant="outlined"
                label="City"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <>
                      {loading ? <CircularProgress color="inherit" size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default LocationAutocomplete;
