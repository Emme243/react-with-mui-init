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

  function getValidSelectedColorMode(selectedColorMode: IColorModeSelected): IColorModeSelected {
    return selectedColorMode === 'system' ||
      selectedColorMode === 'light' ||
      selectedColorMode === 'dark'
      ? selectedColorMode
      : 'system';
  }

  useEffect(() => {
    const selectedColorModeFromLocalStorage = localStorage.getItem(SELECTED_COLOR_MODE_KEY);
    const validSelectedColorMode = getValidSelectedColorMode(
      selectedColorModeFromLocalStorage as IColorModeSelected,
    );
    setSelectedColorMode(validSelectedColorMode);
  }, []);

  function onSelectedColorModeChange(selectedColorMode: IColorModeSelected): void {
    const validSelectedColorMode = getValidSelectedColorMode(selectedColorMode);
    setSelectedColorMode(validSelectedColorMode);
    localStorage.setItem(SELECTED_COLOR_MODE_KEY, validSelectedColorMode);
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
