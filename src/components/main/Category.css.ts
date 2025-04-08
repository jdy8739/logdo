import { style } from '@vanilla-extract/css';

const categoryContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  marginTop: '80px',
});

const categoryItem = style({
  fontSize: '16px',
  padding: '5px 10px',
  borderRadius: '5px',
  fontWeight: 300,
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
});

export { categoryContainer, categoryItem };
