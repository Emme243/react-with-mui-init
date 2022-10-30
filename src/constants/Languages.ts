interface ILanguage {
  nativeName: string;
}
interface ILanguages {
  [key: string]: ILanguage;
}

export const LANGUAGES: ILanguages = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Español' },
};
