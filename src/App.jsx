import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import store from './redux/store';
import AppRoutes from './routes/AppRoutes';
import './assets/styles/global.css';

// Material UI custom theme matching Eventify brand
const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#4F46E5',
      light: '#EEF2FF',
      dark: '#4338CA'
    },
    secondary: {
      main: '#FF5A5F'
    }
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif"
  },
  shape: {
    borderRadius: 10
  }
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
