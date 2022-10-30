import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import MuiContextProvider from './contexts/MuiContextProvider';
import ColorModeContextProvider from './contexts/ColorModeContextProvider';
import router from './router';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ColorModeContextProvider>
      <MuiContextProvider>
        <RouterProvider router={router} />
      </MuiContextProvider>
    </ColorModeContextProvider>
  </React.StrictMode>,
);
