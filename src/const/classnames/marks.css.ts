import { style } from '@vanilla-extract/css';
import { MARKS } from '../enums';
import { themeVars } from '../../styles/theme.css';

const MARKS_CLASSNAMES: Readonly<Partial<Record<MARKS, string>>> = {
  [MARKS.CODE]: style({
    padding: '2px 5px',
    borderRadius: '3px',
    fontFamily: 'Nanum Gothic Coding, monospace',
    background: themeVars.color.code.background,
  }),
  [MARKS.PRE]: style({
    margin: '30px 0 !important',
    borderRadius: '8px',
    padding: '20px',
    fontFamily: 'Nanum Gothic Coding, monospace',
    overflowX: 'scroll',
  }),
};

export { MARKS_CLASSNAMES };
