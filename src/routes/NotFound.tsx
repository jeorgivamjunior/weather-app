import React from 'react';

import { Box, Button, Container, makeStyles, Theme, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import notFoundImage from '../assets/images/not-found.svg';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(1),
  },
  box: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    textAlign: 'center',
    width: '100%',
    left: 0,
  },
}));

export const NotFound: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      <div className={classes.box}>
        <img src={notFoundImage} />

        <Box marginTop={4}>
          <Typography variant="h5" color="textSecondary">
            404
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Sorry, the page you visited does not exist
          </Typography>
        </Box>

        <Button color="primary" variant="outlined" component={Link} to="/">
          Back
        </Button>
      </div>
    </Container>
  );
};
