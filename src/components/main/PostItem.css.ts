import { style } from '@vanilla-extract/css';

const postArticle = style({
  width: '320px',
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
