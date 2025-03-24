const responsiveStyle = ({
  tablet = {},
  desktop = {},
}: {
  tablet?: Record<string, string>;
  desktop?: Record<string, string>;
}) => ({
  '@media': {
    'screen and (max-width: 768px)': tablet,
    'screen and (max-width: 1024px)': desktop,
  },
});

export { responsiveStyle };
