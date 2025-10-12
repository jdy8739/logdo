import { style } from '@vanilla-extract/css';
import { responsiveStyle } from '../../styles/responseive.css';
import { themeVars } from '../../styles/theme.css';

const postBody = style([
  {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '1fr 13.75rem',
    gridGap: '1.875rem',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: '6.25rem',
  },
  responsiveStyle({
    mobile: {
      display: 'block',
      gridTemplateColumns: '',
    },
  }),
]);

const postBodyContent = style({
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.625rem',
  fontSize: '1rem',
  lineHeight: '2',
  wordBreak: 'break-word',
  color: themeVars.color.text.primary,
});

export { postBody, postBodyContent };
