import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { ReactNode, useContext, useMemo } from 'react';
import { getMuiThemeOptions } from '../constants/MuiThemeOptions';
import { ColorModeContext } from './ColorModeContextProvider';

function MuiContextProvider({ children }: { children: ReactNode }) {
  const { muiColorMode } = useContext(ColorModeContext);
  const theme = useMemo(
    () =>
      createTheme({
        ...getMuiThemeOptions(muiColorMode === 'dark'),
        palette: { mode: muiColorMode },
      }),
    [muiColorMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default MuiContextProvider;
