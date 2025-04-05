import { style } from '@vanilla-extract/css';

const postBody = style({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: '1fr 220px',
  gridGap: '30px',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  paddingTop: '100px',
});

const postBodyContent = style({
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '100px',
  fontSize: '16px',
  lineHeight: '2',
  wordBreak: 'break-word',
});

export { postBody, postBodyContent };
