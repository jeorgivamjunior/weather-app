import React from 'react';

import '@fontsource/roboto';
import 'react-toastify/dist/ReactToastify.min.css';

import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import { RouterConfig } from './routes/RouterConfig';
import { persistor, store } from './store';
import theme from './styles/Theme';

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <BrowserRouter>
            <RouterConfig />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
