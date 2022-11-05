import { Button, Container, Stack, Typography } from '@mui/material';
import full_logo from './assets/images/full-logo.svg';
import AppConfigMenu from './components/organisms/AppConfigMenu';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function App() {
  return (
    <Container fixed sx={{ py: 4 }}>
      <Stack direction="column" alignItems="center" spacing={3}>
        <img src={full_logo} alt="Full logo" width={200} />
        <Typography variant="h3" textAlign="center">
          This is your entry point
        </Typography>
        <Typography variant="h5" textAlign="center">
          Start making changes as you want 😉
        </Typography>
        <Typography variant="body1" textAlign="center">
          This page is not translated to any other language, so don&apos;t get surprised if you
          don&apos;t see these texts changing
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="body1">App settings</Typography>
          <ArrowRightIcon />
          <AppConfigMenu />
        </Stack>
        <Button href="/not-found">Go to not found</Button>
      </Stack>
    </Container>
  );
}

export default App;
