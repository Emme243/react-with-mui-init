import { createContext, useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';

type IColorMode = 'light' | 'dark';
export type IColorModeSelected = 'light' | 'dark' | 'system';
interface IColorModeContext {
  colorMode: IColorMode;
  selectedColorMode: IColorModeSelected;
  setSelectedColorMode: (selectedColorMode: IColorModeSelected) => void;
}

export const ColorModeContext = createContext<IColorModeContext>({
  setSelectedColorMode: () => {},
  colorMode: 'light',
  selectedColorMode: 'system',
});
const SELECTED_COLOR_MODE_KEY = 'selectedColorMode';
function ColorModeContextProvider({ children }: { children: React.ReactNode }) {
  const preferredColorModeBySystem: IColorMode = useMediaQuery('(prefers-color-scheme: dark)')
    ? 'dark'
    : 'light';

  const [colorMode, setColorMode] = useState<IColorMode>(preferredColorModeBySystem);
  const [selectedColorMode, setSelectedColorMode] = useState<IColorModeSelected>('system');

  useEffect(() => {
    const selectedColorModeFromLocalStorage = localStorage.getItem(SELECTED_COLOR_MODE_KEY);
    const selectedColorMode =
      selectedColorModeFromLocalStorage != null
        ? (selectedColorModeFromLocalStorage as IColorModeSelected)
        : 'system';
    setSelectedColorMode(selectedColorMode);
  }, []);

  function onSelectedColorModeChange(selectedColorMode: IColorModeSelected) {
    setSelectedColorMode(selectedColorMode);
    localStorage.setItem(SELECTED_COLOR_MODE_KEY, selectedColorMode);
  }

  useEffect(() => {
    setColorMode(selectedColorMode === 'system' ? preferredColorModeBySystem : selectedColorMode);
  }, [preferredColorModeBySystem, selectedColorMode]);

  return (
    <ColorModeContext.Provider
      value={{ setSelectedColorMode: onSelectedColorModeChange, colorMode, selectedColorMode }}
    >
      {children}
    </ColorModeContext.Provider>
  );
}

export default ColorModeContextProvider;
