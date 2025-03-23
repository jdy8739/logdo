import { style } from '@vanilla-extract/css';

const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '80px',
});

const title = style({
  fontSize: '15px',
  fontWeight: '700',
  textDecoration: 'none',
  color: 'inherit',
});

export { header, title };
