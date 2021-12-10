import { ThemeProvider } from "@mui/material/styles";
import React from 'react';
import ReactDOM from 'react-dom';
import darkTheme from "./darkTheme";
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
