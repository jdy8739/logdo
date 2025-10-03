import { style } from '@vanilla-extract/css';
import { responsiveStyle } from '../../../styles/responseive.css';
import { themeVars } from '../../../styles/theme.css';

const footer = style([
  {
    display: 'grid',
    placeItems: 'center',
    marginTop: 'auto',
    padding: '50px 0',
    fontSize: '15px',
    textAlign: 'center',
    lineHeight: '1.5',
    color: themeVars.color.text.secondary,
  },
  responsiveStyle({
    tablet: {
      fontSize: '12px',
    },
  }),
]);

export { footer };
