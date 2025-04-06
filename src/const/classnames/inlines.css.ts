import { INLINES } from '../enums';
import { style } from '@vanilla-extract/css';

const INLINE_CLASSNAMES: Readonly<Partial<Record<INLINES, string>>> = {
  [INLINES.HYPERLINK]: style({
    color: '#4263eb',
    textDecoration: 'underline',
  }),
};

export { INLINE_CLASSNAMES };
