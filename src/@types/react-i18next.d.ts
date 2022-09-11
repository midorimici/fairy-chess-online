import 'react-i18next';
import type common from 'public/locales/en/common.json';
import type newRoom from 'public/locales/en/new-room.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof common;
      'new-room': typeof newRoom;
    };
  }
}
