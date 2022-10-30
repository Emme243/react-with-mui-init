import { createContext, useEffect, useState } from 'react';
import { PaletteOptions, useMediaQuery } from '@mui/material';
import { IColorMode } from '../constants/ColorModes';

type IMuiColorMode = PaletteOptions['mode'];
interface IColorModeContext {
  appColorMode: IColorMode;
  muiColorMode: IMuiColorMode;
  setAppColorMode: (appColorMode: IColorMode) => void;
}

export const ColorModeContext = createContext<IColorModeContext>({
  appColorMode: 'system',
  muiColorMode: 'light',
  setAppColorMode: () => {},
});
const APP_COLOR_MODE_KEY = 'appColorMode';
function ColorModeContextProvider({ children }: { children: React.ReactNode }) {
  const preferredColorModeBySystem: IMuiColorMode = useMediaQuery('(prefers-color-scheme: dark)')
    ? 'dark'
    : 'light';

  const [muiColorMode, setMuiColorMode] = useState<IMuiColorMode>(preferredColorModeBySystem);
  const [appColorMode, setAppColorMode] = useState<IColorMode>('system');

  function getValidAppColorMode(appColorMode: IColorMode): IColorMode {
    return appColorMode === 'system' || appColorMode === 'light' || appColorMode === 'dark'
      ? appColorMode
      : 'system';
  }

  useEffect(() => {
    const appColorModeFromLocalStorage = localStorage.getItem(APP_COLOR_MODE_KEY);
    const validAppColorMode = getValidAppColorMode(appColorModeFromLocalStorage as IColorMode);
    setAppColorMode(validAppColorMode);
  }, []);

  function onAppColorModeChange(appColorMode: IColorMode): void {
    const validAppColorMode = getValidAppColorMode(appColorMode);
    setAppColorMode(validAppColorMode);
    localStorage.setItem(APP_COLOR_MODE_KEY, validAppColorMode);
  }

  useEffect(() => {
    setMuiColorMode(appColorMode === 'system' ? preferredColorModeBySystem : appColorMode);
  }, [preferredColorModeBySystem, appColorMode]);

  return (
    <ColorModeContext.Provider
      value={{
        appColorMode,
        muiColorMode,
        setAppColorMode: onAppColorModeChange,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
}

export default ColorModeContextProvider;
