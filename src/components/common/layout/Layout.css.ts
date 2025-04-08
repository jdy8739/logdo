import { style } from '@vanilla-extract/css';
import { responsiveStyle } from '../../../styles/responseive.css';

const layout = style([
  {
    display: 'flex',
    flexDirection: 'column',
    width: '1000px',
    minHeight: '100%',
    margin: '0 auto',
  },
  responsiveStyle({
    desktop: {
      width: '100%',
      padding: '0 40px',
    },
    tablet: {
      padding: '0 20px',
    },
  }),
]);

const contents = style([
  {
    margin: '80px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '80px',
  },
  responsiveStyle({
    desktop: {
      margin: '50px 0',
    },
  }),
]);

export { layout, contents };
