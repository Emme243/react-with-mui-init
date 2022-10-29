import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { ReactNode, useContext, useMemo } from 'react';
import { MUI_THEME_OPTIONS } from '../constants/MuiThemeOptions';
import { ColorModeContext } from './ColorModeContextProvider';

function MuiContextProvider({ children }: { children: ReactNode }) {
  const { colorMode } = useContext(ColorModeContext);
  const theme = useMemo(
    () => createTheme({ ...MUI_THEME_OPTIONS, palette: { mode: colorMode } }),
    [colorMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default MuiContextProvider;
