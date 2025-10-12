import { style } from '@vanilla-extract/css';
import { MARKS } from '../enums';
import { themeVars } from '../../styles/theme.css';

const MARKS_CLASSNAMES: Readonly<Partial<Record<MARKS, string>>> = {
  [MARKS.CODE]: style({
    padding: '0.125rem 0.3125rem',
    borderRadius: '0.1875rem',
    fontFamily: 'Nanum Gothic Coding, monospace',
    background: themeVars.color.code.background,
  }),
  [MARKS.PRE]: style({
    margin: '0.7rem 0 !important',
    borderRadius: '0.5rem',
    padding: '1.25rem',
    fontFamily: 'Nanum Gothic Coding, monospace',
    overflowX: 'scroll',
  }),
};

export { MARKS_CLASSNAMES };
