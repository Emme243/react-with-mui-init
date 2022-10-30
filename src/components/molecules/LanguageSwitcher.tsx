import { useTranslation } from 'react-i18next';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { MouseEvent } from 'react';
import { LANGUAGES } from '../../constants/Languages';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const changeLanguage = (_: MouseEvent<HTMLElement>, lng: string) => {
    void i18n.changeLanguage(lng);
  };

  return (
    <ToggleButtonGroup exclusive onChange={changeLanguage} value={i18n.language} size="small">
      {Object.keys(LANGUAGES).map(languageKey => (
        <ToggleButton key={languageKey} value={languageKey}>
          {LANGUAGES[languageKey].nativeName}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

export default LanguageSwitcher;
