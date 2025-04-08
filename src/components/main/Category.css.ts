import { style } from '@vanilla-extract/css';

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

export { categoryContainer, categoryItem };
