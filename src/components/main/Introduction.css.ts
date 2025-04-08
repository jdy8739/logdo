import { style } from '@vanilla-extract/css';
import { responsiveStyle } from '../../styles/responseive.css';

const introSection = style([
  {
    display: 'flex',
    alignItems: 'center',
    gap: '60px',
  },
  responsiveStyle({
    desktop: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    mobile: {
      flexDirection: 'column',
      padding: '40px 20px',
      gap: '30px',
    },
  }),
]);

const profileImageWrapper = style({
  borderRadius: '50%',
  overflow: 'hidden',
  boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
  ':hover': {
    transform: 'scale(1.05)',
  },
});

const introContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

const introTitle = style({
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#333',
});

const introDescription = style({
  fontSize: '1.1rem',
  color: '#666',
  lineHeight: '1.6',
});

export {
  introSection,
  profileImageWrapper,
  introContent,
  introTitle,
  introDescription,
};
