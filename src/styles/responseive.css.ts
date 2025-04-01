const responsiveStyle = ({
  mobile = {},
  tablet = {},
  desktop = {},
}: {
  mobile?: Record<string, string>;
  tablet?: Record<string, string>;
  desktop?: Record<string, string>;
}) => ({
  '@media': {
    'screen and (max-width: 1024px)': desktop,
    'screen and (max-width: 768px)': tablet,
    'screen and (max-width: 480px)': mobile,
  },
});

export { responsiveStyle };
