import { style } from '@vanilla-extract/css';
import { responsiveStyle } from '../../styles/responseive.css';
import { themeVars } from '../../styles/theme.css';

const postHeaderContainer = style({
  maxWidth: '1000px',
  margin: '0 auto',
  position: 'relative',
});

const postHeader = style({
  marginBottom: '40px',
});

const postTitle = style({
  fontSize: '32px',
  fontWeight: '700',
  marginBottom: '20px',
  lineHeight: '1.3',
  borderBottom: `1px solid ${themeVars.color.border.primary}`,
  color: themeVars.color.text.primary,
});

const postDate = style({
  fontSize: '14px',
  color: themeVars.color.text.secondary,
});

const postHeaderContent = style({
  padding: '0.7rem',
  fontSize: '16px',
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
  gap: '5px',
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
  borderRadius: '5px',
  fontStyle: 'italic',
  fontSize: '12px',
  selectors: {
    '&:not(:last-child)': {
      marginRight: '15px',
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
