import { style } from '@vanilla-extract/css';

const tocContainer = style({
  position: 'sticky',
  backgroundColor: '#f0f0f0',
  padding: '15px',
  borderRadius: '10px',
  top: '100px',
  width: '100%',
});

const tocTitle = style({
  paddingBottom: '20px',
  fontSize: '15px',
  fontWeight: '600',
});

const tocList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export { tocContainer, tocTitle, tocList };
