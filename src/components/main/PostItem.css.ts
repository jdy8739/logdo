import { style } from '@vanilla-extract/css';

const postArticle = style({
  width: '320px',
  minHeight: '186px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const postTitleWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
});

const postDescription = style({
  color: '#ccc',
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

const postDate = style({
  fontSize: '14px',
  color: '#ccc',
});

const postCategory = style({
  fontSize: '14px',
  selectors: {
    '&:not(:last-child)': {
      marginRight: '10px',
    },
  },
});

export {
  postArticle,
  postTitleWrapper,
  postTitle,
  postDescription,
  postDate,
  postCategory,
};
