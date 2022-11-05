import { useTranslation } from 'react-i18next';

type ITByComponent = (propertyName: string) => string;

function useLocale(componentName: string) {
  const useTranslationResponse = useTranslation();
  const { t } = useTranslationResponse;
  const tByComponent: ITByComponent = propertyName => t(`${componentName}.${propertyName}`);

  return {
    ...useTranslationResponse,
    tByComponent,
  };
}

export default useLocale;
