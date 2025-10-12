import { style } from '@vanilla-extract/css';
import { responsiveStyle } from '../../styles/responseive.css';
import { themeVars } from '../../styles/theme.css';

const tocContainer = style([
  {
    position: 'sticky',
    backgroundColor: themeVars.color.background.secondary,
    padding: '0.9375rem',
    borderRadius: '0.625rem',
    top: '6.25rem',
    width: '100%',
    border: `1px solid ${themeVars.color.border.primary}`,
  },
  responsiveStyle({
    mobile: {
      display: 'none',
    },
  }),
]);

const tocTitle = style({
  paddingBottom: '1.25rem',
  fontSize: '0.9375rem',
  fontWeight: '600',
  color: themeVars.color.text.primary,
});

const tocList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  listStyle: 'none',
});

const tocItem = style({
  lineHeight: '1.5',
  display: 'inline-block',
  color: themeVars.color.text.secondary,
});

export { tocContainer, tocTitle, tocList, tocItem };
