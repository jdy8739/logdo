import { style } from '@vanilla-extract/css';
import { responsiveStyle } from '../../styles/responseive.css';
import { themeVars } from '../../styles/theme.css';

const introSection = style([
  {
    display: 'flex',
    alignItems: 'center',
    gap: '3.75rem',
  },
  responsiveStyle({
    desktop: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    mobile: {
      flexDirection: 'column',
      padding: '2.5rem 1.25rem',
      gap: '1.875rem',
    },
  }),
]);

const profileImageWrapper = style({
  borderRadius: '50%',
  overflow: 'hidden',
  boxShadow: `0 0 0.9375rem ${themeVars.color.border.primary}`,
  transition: 'transform 0.3s ease',
  ':hover': {
    transform: 'scale(1.05)',
  },
});

const introContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
});

const introTitle = style({
  fontSize: '2rem',
  fontWeight: 'bold',
  color: themeVars.color.text.primary,
});

const introDescription = style({
  fontSize: '1.1rem',
  color: themeVars.color.text.secondary,
  lineHeight: '1.6',
});

export {
  introSection,
  profileImageWrapper,
  introContent,
  introTitle,
  introDescription,
};
