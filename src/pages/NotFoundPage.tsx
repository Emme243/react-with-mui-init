import { Box, Button, Container, Stack, Typography } from '@mui/material';
import full_logo from '../assets/images/full-logo.svg';
import not_found_light from '../assets/images/not_found_light.svg';
import not_found_dark from '../assets/images/not_found_dark.svg';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import { useContext } from 'react';
import { ColorModeContext } from '../contexts/ColorModeContextProvider';
import useLocale from '../hooks/useLocale';

function NotFoundPage() {
  const { tByComponent } = useLocale('not_found_page');
  const { muiColorMode } = useContext(ColorModeContext);
  const notFoundImage = muiColorMode === 'dark' ? not_found_dark : not_found_light;

  return (
    <Container sx={{ paddingY: 4 }}>
      <Stack direction="column" justifyContent="start" alignItems="center">
        <img src={full_logo} alt="Full logo" height={50} />
        <Typography variant="h3" mt={3} fontWeight={500}>
          {tByComponent('dont_cry')}
        </Typography>
        <Typography variant="h5" mt={1} fontWeight={400}>
          {tByComponent('sth_went_wrong')}
        </Typography>
        <Typography variant="h6" mt={1} fontWeight={300}>
          {tByComponent('title')}
        </Typography>
        <Box my={6}>
          <img src={notFoundImage} alt="Not found" height={300} />
        </Box>
        <Button href="/" variant="contained" endIcon={<CottageOutlinedIcon />}>
          {tByComponent('go_home')}
        </Button>
      </Stack>
    </Container>
  );
}

export default NotFoundPage;
