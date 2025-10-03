import { style } from '@vanilla-extract/css';
import { themeVars } from '../../styles/theme.css';

export const toggleButton = style({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
});

export const iconButton = style({
  background: 'transparent',
  border: `1px solid ${themeVars.color.border.primary}`,
  borderRadius: '6px',
  padding: '8px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '18px',
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
