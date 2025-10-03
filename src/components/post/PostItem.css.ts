import { ComplexStyleRule, style } from '@vanilla-extract/css';
import { responsiveStyle } from '../../styles/responseive.css';
import { themeVars } from '../../styles/theme.css';

const postArticle = style([
  {
    width: '320px',
    minHeight: '186px',
    boxShadow: `0 0 10px ${themeVars.color.border.primary}`,
    padding: '20px',
    boxSizing: 'border-box',
    transition: 'all 0.3s ease',
    backgroundColor: themeVars.color.background.primary,
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: `0 5px 15px ${themeVars.color.border.secondary}`,
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
  color: themeVars.color.text.tertiary,
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
  color: themeVars.color.text.primary,
} as ComplexStyleRule);

const postDate = style({
  fontSize: '12px',
  color: themeVars.color.text.tertiary,
});

const postCategory = style({
  backgroundColor: themeVars.color.background.tertiary,
  color: themeVars.color.text.secondary,
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
