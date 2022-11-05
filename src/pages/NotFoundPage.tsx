import { Box, Button, Container, Stack, Typography } from '@mui/material';
import hour_rate_full_logo from '../assets/images/hour-rate-full-logo.svg';
import not_found_light from '../assets/images/not_found_light.svg';
import not_found_dark from '../assets/images/not_found_dark.svg';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import { useContext } from 'react';
import { ColorModeContext } from '../contexts/ColorModeContextProvider';
import { useTranslation } from 'react-i18next';

function NotFoundPage() {
  const { t } = useTranslation();
  const { muiColorMode } = useContext(ColorModeContext);
  const notFoundImage = muiColorMode === 'dark' ? not_found_dark : not_found_light;

  return (
    <Container sx={{ paddingY: 4 }}>
      <Stack direction="column" justifyContent="start" alignItems="center">
        <img src={hour_rate_full_logo} alt="Hour rate logo" height={50} />
        <Typography variant="h3" mt={3} fontWeight={500}>
          {t('pages.not_found_page.dont_cry')}
        </Typography>
        <Typography variant="h5" mt={1} fontWeight={400}>
          {t('pages.not_found_page.sth_went_wrong')}
        </Typography>
        <Typography variant="h6" mt={1} fontWeight={300}>
          {t('pages.not_found_page.title')}
        </Typography>
        <Box my={6}>
          <img src={notFoundImage} alt="Not found" height={300} />
        </Box>
        <Button href="/" variant="contained" endIcon={<CottageOutlinedIcon />}>
          {t('pages.not_found_page.go_home')}
        </Button>
      </Stack>
    </Container>
  );
}

export default NotFoundPage;
