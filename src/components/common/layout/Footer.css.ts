import { style } from '@vanilla-extract/css';
import { responsiveStyle } from '../../../styles/responseive.css';
import { themeVars } from '../../../styles/theme.css';

const footer = style([
  {
    display: 'grid',
    placeItems: 'center',
    marginTop: 'auto',
    padding: '3.125rem 0',
    fontSize: '0.9375rem',
    textAlign: 'center',
    lineHeight: '1.5',
    color: themeVars.color.text.secondary,
  },
  responsiveStyle({
    tablet: {
      fontSize: '0.75rem',
    },
  }),
]);

export { footer };
