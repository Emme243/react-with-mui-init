import { Box, Button, Container, Stack, Typography } from '@mui/material';
import taskero_logo_full from '../assets/images/taskero_logo_full.svg';
import not_found_light from '../assets/images/not_found_light.svg';
import not_found_dark from '../assets/images/not_found_dark.svg';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { useContext } from 'react';
import { ColorModeContext } from '../contexts/ColorModeContextProvider';

function NotFoundPage() {
  const { colorMode } = useContext(ColorModeContext);
  const notFoundImage = colorMode === 'dark' ? not_found_dark : not_found_light;

  return (
    <Container sx={{ paddingY: 4 }}>
      <Stack direction="column" justifyContent="start" alignItems="center">
        <img src={taskero_logo_full} alt="Taskero logo" height={50} />
        <Typography variant="h3" mt={3} fontWeight={500}>
          Oops! Don&apos;t cry
        </Typography>
        <Typography variant="h5" mt={1} fontWeight={400}>
          Something went wrong.
        </Typography>
        <Typography variant="h6" mt={1} fontWeight={300}>
          Error 404 - Page not found
        </Typography>
        <Box my={6}>
          <img src={notFoundImage} alt="Not found" height={300} />
        </Box>
        <Button variant="contained" startIcon={<KeyboardArrowLeftOutlinedIcon />}>
          Go back
        </Button>
      </Stack>
    </Container>
  );
}

export default NotFoundPage;
