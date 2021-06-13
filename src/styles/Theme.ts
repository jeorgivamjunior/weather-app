import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';

const primary = '#c60309';

const theme: ThemeOptions = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: '#607d8b',
    },
  },
});

export default theme;
