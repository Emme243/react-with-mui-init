import { Button, TextField, Typography } from '@mui/material';
import taskero_logo_full from './assets/images/taskero_logo_full.svg';
import AppConfigMenu from './components/organisms/AppConfigMenu';

function App() {
  return (
    <div className="App">
      <img src={taskero_logo_full} alt="Logo" width={100} />
      <Typography variant="h1">Thin</Typography>
      <AppConfigMenu />
      <TextField type="text" />
      <Button href="/not-found">Ir a not found</Button>
    </div>
  );
}

export default App;
