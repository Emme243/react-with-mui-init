import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useContext, MouseEvent } from 'react';
import { ColorModeContext, IColorModeSelected } from '../../contexts/ColorModeContextProvider';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DevicesIcon from '@mui/icons-material/Devices';

function ToggleColorModeButton() {
  const { setSelectedColorMode, selectedColorMode } = useContext(ColorModeContext);

  function handleToggleColorMode(
    _: MouseEvent<HTMLElement>,
    colorModeSelected: IColorModeSelected,
  ) {
    setSelectedColorMode(colorModeSelected);
  }

  return (
    <ToggleButtonGroup exclusive value={selectedColorMode} onChange={handleToggleColorMode}>
      <ToggleButton value="light" aria-label="left aligned">
        <LightModeOutlinedIcon />
      </ToggleButton>
      <ToggleButton value="dark" aria-label="centered">
        <DarkModeIcon />
      </ToggleButton>
      <ToggleButton value="system" aria-label="right aligned">
        <DevicesIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ToggleColorModeButton;
