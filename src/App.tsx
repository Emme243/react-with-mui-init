import { TextField, Typography } from '@mui/material';
import ToggleColorModeButton from './components/molecules/ToggleColorModeButton';
import taskero_logo_full from './assets/images/taskero_logo_full.svg';

function App() {
  return (
    <div className="App">
      <img src={taskero_logo_full} alt="Logo" width={100} />
      <Typography variant="h1">Thin</Typography>
      <ToggleColorModeButton />
      <TextField type="text" />
    </div>
  );
}

export default App;
