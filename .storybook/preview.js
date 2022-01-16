import { i18n } from './i18n';

export const parameters = {
  i18n,
  locale: 'en',
  locales: {
    en: 'English',
    ja: '日本語',
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
