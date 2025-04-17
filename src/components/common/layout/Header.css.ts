import { style } from '@vanilla-extract/css';

const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 100,
  transition: 'transform 0.3s ease',
});

const slideUp = style({
  transform: 'translateY(-100%)',
});

const title = style({
  fontSize: '1.8rem',
  fontWeight: 'bold',
  color: '#333333',
  margin: 0,
  cursor: 'pointer',
  transition: 'color 0.2s ease',
  ':hover': {
    color: '#666666',
  },
});

const iconContainer = style({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  fontSize: '1.5rem',
});

export { header, slideUp, title, iconContainer };
