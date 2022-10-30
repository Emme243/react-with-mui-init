import LanguageSwitcher from '../molecules/LanguageSwitcher';
import ToggleColorModeButton from '../molecules/ToggleColorModeButton';
import { Box, Divider, IconButton, Menu, Stack, Tooltip, Typography } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useState, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

function AppConfigMenu() {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }
  function handleMenuClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Tooltip title={t('components.organisms.app_config_menu.title')} placement="bottom">
        <IconButton color="primary" size="large" onClick={handleClick}>
          <SettingsOutlinedIcon />
        </IconButton>
      </Tooltip>

      <Menu
        id="app-config-menu"
        open={isMenuOpen}
        onClose={handleMenuClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Stack
          direction="column"
          divider={<Divider orientation="horizontal" flexItem />}
          spacing={2}
          width={280}
        >
          <Box px={3} pt={1}>
            <Typography variant="h6" textTransform="uppercase">
              {t('components.organisms.app_config_menu.title')}
            </Typography>
          </Box>
          <Box px={3} pb={1}>
            <LanguageSwitcher />
          </Box>
          <Box px={3} pb={2}>
            <ToggleColorModeButton />
          </Box>
        </Stack>
      </Menu>
    </div>
  );
}

export default AppConfigMenu;
