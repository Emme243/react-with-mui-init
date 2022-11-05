import { Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { useContext, MouseEvent } from 'react';
import { ColorModeContext } from '../../contexts/ColorModeContextProvider';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DevicesIcon from '@mui/icons-material/Devices';
import { COLOR_MODES, IColorMode } from '../../constants/ColorModes';
import useLocale from '../../hooks/useLocale';

function ColorModeSwitcher() {
  const { tByComponent } = useLocale('common.theme');
  const { setAppColorMode, appColorMode } = useContext(ColorModeContext);

  function handleToggleColorMode(_: MouseEvent<HTMLElement>, selectedAppColorMode: IColorMode) {
    if (selectedAppColorMode !== null) setAppColorMode(selectedAppColorMode);
  }

  function getColorModeIcon(colorMode: IColorMode) {
    switch (colorMode) {
      case 'light':
        return <LightModeOutlinedIcon />;
      case 'dark':
        return <DarkModeIcon />;
      case 'system':
        return <DevicesIcon />;
    }
  }

  return (
    <Stack direction="column">
      <Typography variant="soloLabel" mb={1}>
        {tByComponent('title')}
      </Typography>
      <ToggleButtonGroup
        exclusive
        value={appColorMode}
        onChange={handleToggleColorMode}
        orientation="vertical"
      >
        {COLOR_MODES.map(colorMode => (
          <ToggleButton value={colorMode} key={colorMode}>
            <Stack direction="row" spacing={1} alignItems="center">
              {getColorModeIcon(colorMode)}
              <Typography textTransform="capitalize">{tByComponent(colorMode)}</Typography>
            </Stack>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Stack>
  );
}

export default ColorModeSwitcher;
