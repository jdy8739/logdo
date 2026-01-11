import { style } from '@vanilla-extract/css';
import { themeVars } from '../../styles/theme.css';

export const iconButton = style({
  background: themeVars.color.background.secondary,
  border: `1px solid ${themeVars.color.border.primary}`,
  borderRadius: '0.375rem',
  padding: '0.5rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.125rem',
  color: themeVars.color.text.primary,
  transition: 'all 0.2s ease',

  ':hover': {
    background: themeVars.color.background.tertiary,
    borderColor: themeVars.color.border.secondary,
    transform: 'scale(1.05)',
  },
});
