import { Button, Container, TextField, Typography } from "@mui/material";
import hour_rate_full_logo from './assets/images/hour-rate-full-logo.svg';
import AppConfigMenu from './components/organisms/AppConfigMenu';

function App() {
  return (
    <Container fixed>
      <img src={hour_rate_full_logo} alt="Hour rate logo" width={200} />
      <Typography variant="h1">Thin</Typography>
      <AppConfigMenu />
      <TextField type="text" />
      <Button href="/not-found">Ir a not found</Button>
    </Container>
  );
}

export default App;
