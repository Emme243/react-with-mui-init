import { Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { useContext, MouseEvent } from 'react';
import { ColorModeContext } from '../../contexts/ColorModeContextProvider';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DevicesIcon from '@mui/icons-material/Devices';
import { useTranslation } from 'react-i18next';
import { COLOR_MODES, IColorMode } from '../../constants/ColorModes';

function ToggleColorModeButton() {
  const { t } = useTranslation();
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
        {t('components.molecules.toggle_color_mode_button.theme')}
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
              <Typography textTransform="capitalize">
                {t(`components.molecules.toggle_color_mode_button.${colorMode}`)}
              </Typography>
            </Stack>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Stack>
  );
}

export default ToggleColorModeButton;
