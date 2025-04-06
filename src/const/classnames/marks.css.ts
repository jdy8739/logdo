import { style } from '@vanilla-extract/css';
import { MARKS } from '../enums';

const MARKS_CLASSNAMES: Readonly<Partial<Record<MARKS, string>>> = {
  [MARKS.CODE]: style({
    padding: '2px 5px',
    borderRadius: '3px',
    fontFamily: 'Nanum Gothic Coding, monospace',
    background: '#f1f3f5',
  }),
  [MARKS.PRE]: style({
    margin: '30px 0 !important',
    borderRadius: '8px',
    padding: '20px',
    background: '#f1f3f5',
    fontFamily: 'Nanum Gothic Coding, monospace',
  }),
};

export { MARKS_CLASSNAMES };
