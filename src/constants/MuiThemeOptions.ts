import SilkaThin from '../assets/fonts/silka/silka-thin-webfont.ttf';
import SilkaExtraLight from '../assets/fonts/silka/silka-extralight-webfont.ttf';
import SilkaLight from '../assets/fonts/silka/silka-light-webfont.ttf';
import SilkaRegular from '../assets/fonts/silka/silka-regular-webfont.ttf';
import SilkaMedium from '../assets/fonts/silka/silka-medium-webfont.ttf';
import SilkaSemiBold from '../assets/fonts/silka/silka-semibold-webfont.ttf';
import SilkaBold from '../assets/fonts/silka/silka-bold-webfont.ttf';
import SilkaBlack from '../assets/fonts/silka/silka-black-webfont.ttf';
import { ThemeOptions } from '@mui/material';

export const MUI_THEME_OPTIONS: ThemeOptions = {
  typography: {
    fontFamily: ['Silka', 'sans-serif', 'Arial'].join(','),
    fontSize: 14,
    h1: {
      fontSize: '2.5rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': [
          { fontFamily: 'Silka', src: `url(${SilkaThin})`, fontWeight: 100 },
          { fontFamily: 'Silka', src: `url(${SilkaExtraLight})`, fontWeight: 200 },
          { fontFamily: 'Silka', src: `url(${SilkaLight})`, fontWeight: 300 },
          { fontFamily: 'Silka', src: `url(${SilkaRegular})`, fontWeight: 400 },
          { fontFamily: 'Silka', src: `url(${SilkaMedium})`, fontWeight: 500 },
          { fontFamily: 'Silka', src: `url(${SilkaSemiBold})`, fontWeight: 600 },
          { fontFamily: 'Silka', src: `url(${SilkaBold})`, fontWeight: 700 },
          { fontFamily: 'Silka', src: `url(${SilkaBlack})`, fontWeight: 900 },
        ],
      },
    },
  },
};
