import { style } from '@vanilla-extract/css';

const postArticle = style({
  width: '320px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  boxSizing: 'border-box',
  gap: '15px',
});

const postTitle = style({
  display: '-webkit-box',
  overflow: 'hidden',
  maxHeight: '2.4em',
  fontSize: '18px',
  fontWeight: '700',
  textOverflow: 'ellipsis',
  wordWrap: 'break-word',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  lineHeight: '1.2em',
});

export { postArticle, postTitle };
