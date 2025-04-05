import { BLOCKS } from '../enums';

const BLOCK_CLASSNAMES: Readonly<
  Partial<Record<BLOCKS, Record<string, string>>>
> = {
  [BLOCKS.HEADING_1]: {
    fontSize: '30px',
    fontWeight: '700',
    marginBottom: '40px',
  },
  [BLOCKS.HEADING_2]: {
    fontSize: '25px',
    fontWeight: '700',
    marginBottom: '35px',
  },
  [BLOCKS.HEADING_3]: {
    fontSize: '20px',
    fontWeight: '700',
    marginBottom: '30px',
  },
  [BLOCKS.OL_LIST]: {
    marginLeft: '20px',
    padding: '30px 0',
  },
  [BLOCKS.UL_LIST]: {
    marginLeft: '20px',
    padding: '30px 0',
  },
};

export { BLOCK_CLASSNAMES };
