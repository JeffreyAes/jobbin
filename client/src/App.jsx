import { Route, Navigate, Routes } from 'react-router-dom';
import React, { useState } from 'react'
// import './App.css';
import UserRegister from './views/UserRegister';
import Dashboard from './views/Dashboard';
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#A1F4D0',
    },
    secondary: {
      main: '#e6417c',
    },
    background: {
      paper: '#235641',
      default: '#242525',
    },
    error: {
      main: '#d32f2f',
    },
    success: {
      main: '#25ffa3',
    },
    info: {
      main: '#5595D3',
    },
    text: {
      primary: '#E0DDD5',
      secondary: '#c5e1a5',
    },
  },
});


function App() {
  const [logged, setLogged] = useState(null)
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
    <div className="text-center">
        <Routes>
          <Route element={<Navigate to='/register' replace />} path='/' ></Route>
          <Route element={<UserRegister logged={logged} setLogged={setLogged} />} path='/register' ></Route>
          <Route element={<Dashboard logged={logged} setLogged={setLogged} />} path='/dashboard/:id' ></Route>
        </Routes>
    </div>
      </ThemeProvider>
  );
}

export default App;
