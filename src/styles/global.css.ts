import { globalStyle } from '@vanilla-extract/css';
import { themeVars } from './theme.css';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  backgroundColor: themeVars.color.background.primary,
  color: themeVars.color.text.primary,
  transition: 'background-color 0.3s ease, color 0.3s ease',
});

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('a', {
  color: themeVars.color.link.primary,
  textDecoration: 'none',
  transition: 'color 0.2s ease',
});

globalStyle('a:hover', {
  color: themeVars.color.link.hover,
});
