import { style } from '@vanilla-extract/css';
import { responsiveStyle } from '../../../styles/responseive.css';

const layout = style([
  {
    display: 'flex',
    flexDirection: 'column',
    width: '62.5rem',
    minHeight: '100%',
    margin: '0 auto',
  },
  responsiveStyle({
    desktop: {
      width: '100%',
      padding: '0 2.5rem',
    },
    tablet: {
      padding: '0 1.25rem',
    },
  }),
]);

const contents = style([
  {
    margin: '5rem 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '5rem',
  },
  responsiveStyle({
    desktop: {
      margin: '3.125rem 0',
    },
  }),
]);

export { layout, contents };
