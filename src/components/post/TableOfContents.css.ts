import { style } from '@vanilla-extract/css';
import { responsiveStyle } from '../../styles/responseive.css';
import { themeVars } from '../../styles/theme.css';

const tocContainer = style([
  {
    position: 'sticky',
    backgroundColor: themeVars.color.background.secondary,
    padding: '15px',
    borderRadius: '10px',
    top: '100px',
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
  paddingBottom: '20px',
  fontSize: '15px',
  fontWeight: '600',
  color: themeVars.color.text.primary,
});

const tocList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  listStyle: 'none',
});

const tocItem = style({
  lineHeight: '1.5',
  display: 'inline-block',
  color: themeVars.color.text.secondary,
});

export { tocContainer, tocTitle, tocList, tocItem };
