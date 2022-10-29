import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import MuiContextProvider from './contexts/MuiContextProvider';
import ColorModeContextProvider from './contexts/ColorModeContextProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ColorModeContextProvider>
      <MuiContextProvider>
        <App />
      </MuiContextProvider>
    </ColorModeContextProvider>
  </React.StrictMode>,
);
