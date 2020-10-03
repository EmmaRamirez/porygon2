import { create } from '@storybook/theming/create';

import porygon2 from '../core/assets/porygon2.png';

export default create({
  base: 'light',

  colorPrimary: 'white',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: 'white',
  appContentBg: '#fff',
  appBorderColor: '#eee',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: '#fff',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Porygon 2 Component Library',
  brandUrl: 'https://example.com',
  brandImage:  porygon2,
});