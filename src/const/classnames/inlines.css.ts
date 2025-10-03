import { INLINES } from '../enums';
import { style } from '@vanilla-extract/css';
import { themeVars } from '../../styles/theme.css';

const INLINE_CLASSNAMES: Readonly<Partial<Record<INLINES, string>>> = {
  [INLINES.HYPERLINK]: style({
    color: themeVars.color.link.primary,
    textDecoration: 'underline',
    ':hover': {
      color: themeVars.color.link.hover,
    },
  }),
};

export { INLINE_CLASSNAMES };
