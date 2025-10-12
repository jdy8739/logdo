import { style } from '@vanilla-extract/css';
import { BLOCKS } from '../enums';
import { themeVars } from '../../styles/theme.css';

const BLOCK_CLASSNAMES: Readonly<Partial<Record<BLOCKS, string>>> = {
  [BLOCKS.HEADING_1]: style({
    fontSize: '1.875rem',
    fontWeight: '700',
    marginBottom: '2.5rem',
    color: themeVars.color.text.primary,
  }),
  [BLOCKS.HEADING_2]: style({
    fontSize: '1.5625rem',
    fontWeight: '700',
    marginBottom: '2.1875rem',
    color: themeVars.color.text.primary,
  }),
  [BLOCKS.HEADING_3]: style({
    fontSize: '1.25rem',
    fontWeight: '700',
    marginBottom: '0.7rem',
    color: themeVars.color.text.primary,
  }),
  [BLOCKS.OL_LIST]: style({
    marginLeft: '1.25rem',
    padding: '0.7rem 0',
    color: themeVars.color.text.primary,
  }),
  [BLOCKS.UL_LIST]: style({
    marginLeft: '1.25rem',
    padding: '0.7rem 0',
    color: themeVars.color.text.primary,
  }),
  [BLOCKS.HR]: style({
    border: `1px solid ${themeVars.color.border.primary}`,
    margin: '3.5rem 0',
  }),
  [BLOCKS.QUOTE]: style({
    margin: '1.25rem 0',
    padding: '1.25rem',
    borderRadius: '0.5rem',
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
