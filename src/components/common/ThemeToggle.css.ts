import { style } from '@vanilla-extract/css';
import { themeVars } from '../../styles/theme.css';

export const toggleButton = style({
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
});

export const iconButton = style({
  background: 'transparent',
  border: `1px solid ${themeVars.color.border.primary}`,
  borderRadius: '0.375rem',
  padding: '0.5rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.125rem',
  color: themeVars.color.text.secondary,
  transition: 'all 0.2s ease',

  ':hover': {
    background: themeVars.color.background.secondary,
    color: themeVars.color.text.primary,
  },
});

export const active = style({
  background: themeVars.color.background.tertiary,
  color: themeVars.color.text.primary,
  borderColor: themeVars.color.border.secondary,
});
