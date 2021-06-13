import React from 'react';

import { Typography, Container, makeStyles, Theme, Toolbar, AppBar, Fab } from '@material-ui/core';
import { ArrowBackIos } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

import { HeaderProps } from './types';

const useStyles = makeStyles((theme: Theme) => ({
  backIcon: {
    marginRight: theme.spacing(2),
    '& .MuiFab-label': {
      marginLeft: 6,
    },
    background: 'transparent',
    boxShadow: 'none',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    zIndex: -1,
    left: 0,
  },
  toolbar: {
    justifyContent: 'space-between',
    zIndex: 1,
  },
}));

const Header: React.FC<HeaderProps> = ({ hasBackButton, children }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar position="sticky" color="primary">
      <Container maxWidth="md">
        <Toolbar className={classes.toolbar}>
          {hasBackButton && (
            <Fab onClick={() => history.goBack()} className={classes.backIcon} color="primary" size="small">
              <ArrowBackIos fontSize="small" />
            </Fab>
          )}
          <Typography variant="h6" className={classes.title}>
            {children}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
