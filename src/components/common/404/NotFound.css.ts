import { style } from '@vanilla-extract/css';
import { responsiveStyle } from '../../../styles/responseive.css';

const notFoundContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '150px 0',
  gap: '10px',
});

const notFoundTitle = style([
  {
    fontSize: '0.7rem',
    fontWeight: '700',
  },
  responsiveStyle({
    tablet: {
      fontSize: '25px',
    },
  }),
]);

const notFoundDescription = style([
  {
    marginTop: '10px',
    fontSize: '20px',
    fontWeight: '300',
  },
  responsiveStyle({
    tablet: {
      fontSize: '18px',
    },
  }),
]);

const notFoundLink = style([
  {
    marginTop: '30px',
    fontSize: '15px',
    color: 'inherit',
  },
]);

export { notFoundContainer, notFoundTitle, notFoundDescription, notFoundLink };
