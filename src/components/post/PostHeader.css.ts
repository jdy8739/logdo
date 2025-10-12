import { style } from '@vanilla-extract/css';
import { responsiveStyle } from '../../styles/responseive.css';
import { themeVars } from '../../styles/theme.css';

const postHeaderContainer = style({
  maxWidth: '62.5rem',
  margin: '0 auto',
  position: 'relative',
});

const postHeader = style({
  marginBottom: '2.5rem',
});

const postTitle = style({
  fontSize: '2rem',
  fontWeight: '700',
  marginBottom: '1.25rem',
  lineHeight: '1.3',
  borderBottom: `1px solid ${themeVars.color.border.primary}`,
  color: themeVars.color.text.primary,
});

const postDate = style({
  fontSize: '0.875rem',
  color: themeVars.color.text.secondary,
});

const postHeaderContent = style({
  padding: '0.7rem',
  fontSize: '1rem',
  lineHeight: '1.8',
  position: 'absolute',
  boxSizing: 'border-box',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2))',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
});

const postHeaderContentInner = style({
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.3125rem',
});

const postCategoryContainer = style([
  responsiveStyle({
    mobile: {
      display: 'none',
    },
  }),
]);

const postCategory = style({
  color: '#eee',
  borderRadius: '0.3125rem',
  fontStyle: 'italic',
  fontSize: '0.75rem',
  selectors: {
    '&:not(:last-child)': {
      marginRight: '0.9375rem',
    },
  },
});

const postDateContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
});

export {
  postHeaderContainer,
  postHeader,
  postTitle,
  postDate,
  postCategoryContainer,
  postCategory,
  postHeaderContent,
  postHeaderContentInner,
  postDateContainer,
};
