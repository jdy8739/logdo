import { style } from '@vanilla-extract/css';
import { responsiveStyle } from '../../../styles/responseive.css';

const notFoundContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '9.375rem 0',
  gap: '0.625rem',
});

const notFoundTitle = style([
  {
    fontSize: '0.7rem',
    fontWeight: '700',
  },
  responsiveStyle({
    tablet: {
      fontSize: '1.5625rem',
    },
  }),
]);

const notFoundDescription = style([
  {
    marginTop: '0.625rem',
    fontSize: '1.25rem',
    fontWeight: '300',
  },
  responsiveStyle({
    tablet: {
      fontSize: '1.125rem',
    },
  }),
]);

const notFoundLink = style([
  {
    marginTop: '1.875rem',
    fontSize: '0.9375rem',
    color: 'inherit',
  },
]);

export { notFoundContainer, notFoundTitle, notFoundDescription, notFoundLink };
