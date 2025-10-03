import { style } from '@vanilla-extract/css';
import { themeVars } from '../../styles/theme.css';

const categoryContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  padding: '20px 0',
});

const categoryItem = style({
  padding: '8px 16px',
  border: 'none',
  borderRadius: '20px',
  fontSize: '0.9rem',
  fontWeight: '500',
  transition: 'all 0.2s ease',
  ':hover': {
    opacity: 0.9,
    transform: 'translateY(-1px)',
  },
});

const categoryItemSelected = style({
  backgroundColor: themeVars.color.background.secondary,
  color: themeVars.color.text.secondary,
  cursor: 'default',
});

const categoryItemDefault = style({
  backgroundColor: themeVars.color.text.primary,
  color: themeVars.color.background.primary,
  cursor: 'pointer',
});

export {
  categoryContainer,
  categoryItem,
  categoryItemSelected,
  categoryItemDefault,
};
