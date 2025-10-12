import { style } from '@vanilla-extract/css';
import { BLOCKS } from '../enums';
import { themeVars } from '../../styles/theme.css';

const BLOCK_CLASSNAMES: Readonly<Partial<Record<BLOCKS, string>>> = {
  [BLOCKS.HEADING_1]: style({
    fontSize: '30px',
    fontWeight: '700',
    marginBottom: '40px',
    color: themeVars.color.text.primary,
  }),
  [BLOCKS.HEADING_2]: style({
    fontSize: '25px',
    fontWeight: '700',
    marginBottom: '35px',
    color: themeVars.color.text.primary,
  }),
  [BLOCKS.HEADING_3]: style({
    fontSize: '20px',
    fontWeight: '700',
    marginBottom: '0.7rem',
    color: themeVars.color.text.primary,
  }),
  [BLOCKS.OL_LIST]: style({
    marginLeft: '20px',
    padding: '0.7rem 0',
    color: themeVars.color.text.primary,
  }),
  [BLOCKS.UL_LIST]: style({
    marginLeft: '20px',
    padding: '0.7rem 0',
    color: themeVars.color.text.primary,
  }),
  [BLOCKS.HR]: style({
    border: `1px solid ${themeVars.color.border.primary}`,
    margin: '3.5rem 0',
  }),
  [BLOCKS.QUOTE]: style({
    margin: '20px 0',
    padding: '20px',
    borderRadius: '8px',
    background: themeVars.color.background.secondary,
    color: themeVars.color.text.primary,
    borderLeft: `4px solid ${themeVars.color.border.secondary}`,
  }),
  [BLOCKS.EMBEDDED_ASSET]: style({
    width: '100%',
    margin: '0.7rem 0',
  }),
};

export { BLOCK_CLASSNAMES };
