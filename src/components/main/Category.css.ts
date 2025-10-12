import { style } from '@vanilla-extract/css';
import { themeVars } from '../../styles/theme.css';

const categoryContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.625rem',
  padding: '1.25rem 0',
});

const categoryItem = style({
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '1.25rem',
  fontSize: '0.9rem',
  fontWeight: '500',
  transition: 'all 0.2s ease',
  ':hover': {
    opacity: 0.9,
    transform: 'translateY(-0.0625rem)',
  },
});

const categoryItemSelected = style({
  backgroundColor: themeVars.color.background.tertiary,
  color: themeVars.color.text.primary,
  cursor: 'default',
});

const categoryItemDefault = style({
  backgroundColor: themeVars.color.background.secondary,
  color: themeVars.color.text.secondary,
  cursor: 'pointer',
});

export {
  categoryContainer,
  categoryItem,
  categoryItemSelected,
  categoryItemDefault,
};
