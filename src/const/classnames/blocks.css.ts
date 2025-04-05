import { style } from '@vanilla-extract/css';
import { BLOCKS } from '../enums';

const BLOCK_CLASSNAMES: Readonly<Partial<Record<BLOCKS, string>>> = {
  [BLOCKS.HEADING_1]: style({
    fontSize: '30px',
    fontWeight: '700',
    marginBottom: '40px',
  }),
  [BLOCKS.HEADING_2]: style({
    fontSize: '25px',
    fontWeight: '700',
    marginBottom: '35px',
  }),
  [BLOCKS.HEADING_3]: style({
    fontSize: '20px',
    fontWeight: '700',
    marginBottom: '30px',
  }),
  [BLOCKS.OL_LIST]: style({
    marginLeft: '20px',
    padding: '30px 0',
  }),
  [BLOCKS.UL_LIST]: style({
    marginLeft: '20px',
    padding: '30px 0',
  }),
  [BLOCKS.HR]: style({
    border: '1px solid rgba(0, 0, 0, 0.5)',
    margin: '80px 0',
  }),
  [BLOCKS.QUOTE]: style({
    margin: '20px 0',
    padding: '20px',
    borderRadius: '8px',
    background: '#f1f3f5',
  }),
};

export { BLOCK_CLASSNAMES };
