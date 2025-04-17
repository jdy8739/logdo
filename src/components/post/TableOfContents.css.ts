import { style } from '@vanilla-extract/css';
import { responsiveStyle } from '../../styles/responseive.css';

const tocContainer = style([
  {
    position: 'sticky',
    backgroundColor: '#f0f0f0',
    padding: '15px',
    borderRadius: '10px',
    top: '100px',
    width: '100%',
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
});

export { tocContainer, tocTitle, tocList, tocItem };
