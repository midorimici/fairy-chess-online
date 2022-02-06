import * as NextImage from 'next/image';
import { i18n } from './i18n';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized loader={({ src }) => src} />,
});

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
