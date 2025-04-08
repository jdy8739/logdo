import { ComplexStyleRule, style } from '@vanilla-extract/css';
import { responsiveStyle } from '../../styles/responseive.css';

const postArticle = style([
  {
    width: '320px',
    minHeight: '186px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    boxSizing: 'border-box',
    transition: 'all 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
    },
  },
  responsiveStyle({
    desktop: {
      width: 'calc(50% - 10px)',
    },
    mobile: {
      width: '100%',
    },
  }),
]);

const postLink = style({
  display: 'flex',
  gap: '15px',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const postTitleWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

/** 말줄임 표시를 위한 스타일 */
const ELLIPSIS_STYLE = {
  display: '-webkit-box',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  wordWrap: 'break-word',
  WebkitBoxOrient: 'vertical',
} as const;

const postDescription = style({
  ...ELLIPSIS_STYLE,
  color: '#ccc',
  fontSize: '12px',
  fontWeight: '700',
  lineHeight: '1.2em',
  WebkitLineClamp: '2',
} as ComplexStyleRule);

const postTitle = style({
  ...ELLIPSIS_STYLE,
  fontSize: '18px',
  fontWeight: '700',
  lineHeight: '1.2em',
  WebkitLineClamp: '1',
} as ComplexStyleRule);

const postDate = style({
  fontSize: '12px',
  color: '#ccc',
});

const postCategory = style({
  backgroundColor: '#eee',
  color: '#333',
  padding: '5px 10px',
  borderRadius: '5px',
  fontStyle: 'italic',
  fontSize: '12px',
  selectors: {
    '&:not(:last-child)': {
      marginRight: '5px',
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
  postLink,
};
