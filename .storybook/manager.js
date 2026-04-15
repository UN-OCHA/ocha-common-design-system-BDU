import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const ochaTheme = create({
  base: 'dark',

  // Brand
  brandTitle: 'OCHA Design System — Common Design',
  brandUrl: 'https://brand.unocha.org',
  brandImage: './ocha-logo-horizontal-white.svg',
  brandTarget: '_blank',

  // Sidebar / accents
  colorPrimary: '#FFFFFF',
  colorSecondary: '#FFFFFF',

  // UI — OCHA Blue (UN Blue) background
  appBg: '#009EDB',
  appContentBg: '#FFFFFF',
  appBorderColor: '#0077B8',
  appBorderRadius: 4,

  // Text — black on the OCHA Blue sidebar per brand request
  textColor: '#000000',
  textInverseColor: '#FFFFFF',

  // Toolbar
  barTextColor: '#000000',
  barSelectedColor: '#FFFFFF',
  barHoverColor: '#FFFFFF',
  barBg: '#009EDB',

  // Form
  inputBg: '#FFFFFF',
  inputBorder: '#0077B8',
  inputTextColor: '#000000',
  inputBorderRadius: 4,
});

addons.setConfig({
  theme: ochaTheme,
});
