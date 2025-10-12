import { ComplexStyleRule, style } from '@vanilla-extract/css';
import { responsiveStyle } from '../../styles/responseive.css';
import { themeVars } from '../../styles/theme.css';

const postArticle = style([
  {
    width: '20rem',
    minHeight: '11.625rem',
    boxShadow: `0 0 0.625rem ${themeVars.color.border.primary}`,
    padding: '1.25rem',
    boxSizing: 'border-box',
    transition: 'all 0.3s ease',
    backgroundColor: themeVars.color.background.primary,
    ':hover': {
      transform: 'translateY(-0.3125rem)',
      boxShadow: `0 0.3125rem 0.9375rem ${themeVars.color.border.secondary}`,
    },
  },
  responsiveStyle({
    desktop: {
      width: 'calc(50% - 0.625rem)',
    },
    mobile: {
      width: '100%',
    },
  }),
]);

const postLink = style({
  display: 'flex',
  gap: '0.9375rem',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const postTitleWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
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
  fontSize: '0.75rem',
  fontWeight: '700',
  lineHeight: '1.2em',
  WebkitLineClamp: '2',
} as ComplexStyleRule);

const postTitle = style({
  ...ELLIPSIS_STYLE,
  fontSize: '1.125rem',
  fontWeight: '700',
  lineHeight: '1.2em',
  WebkitLineClamp: '1',
  color: themeVars.color.text.primary,
} as ComplexStyleRule);

const postDate = style({
  fontSize: '0.75rem',
  color: themeVars.color.text.tertiary,
});

const postCategory = style({
  backgroundColor: themeVars.color.background.tertiary,
  color: themeVars.color.text.secondary,
  padding: '0.3125rem 0.625rem',
  borderRadius: '0.3125rem',
  fontStyle: 'italic',
  fontSize: '0.75rem',
  selectors: {
    '&:not(:last-child)': {
      marginRight: '0.3125rem',
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
