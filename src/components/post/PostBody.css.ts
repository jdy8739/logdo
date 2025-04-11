import { style } from '@vanilla-extract/css';
import { responsiveStyle } from '../../styles/responseive.css';

const postBody = style([
  {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '1fr 220px',
    gridGap: '30px',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: '100px',
  },
  responsiveStyle({
    mobile: {
      display: 'block',
      gridTemplateColumns: '',
    },
  }),
]);

const postBodyContent = style({
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  fontSize: '16px',
  lineHeight: '2',
  wordBreak: 'break-word',
});

export { postBody, postBodyContent };
