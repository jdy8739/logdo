import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';

// Create theme contract - defines the CSS variable names
export const themeVars = createGlobalThemeContract({
  color: {
    text: {
      primary: 'color-text-primary',
      secondary: 'color-text-secondary',
      tertiary: 'color-text-tertiary',
    },
    background: {
      primary: 'color-background-primary',
      secondary: 'color-background-secondary',
      tertiary: 'color-background-tertiary',
    },
    border: {
      primary: 'color-border-primary',
      secondary: 'color-border-secondary',
    },
    link: {
      primary: 'color-link-primary',
      hover: 'color-link-hover',
    },
    code: {
      background: 'color-code-background',
      text: 'color-code-text',
      inline: 'color-code-inline',
    },
  },
});

// Light theme
createGlobalTheme('[data-theme="light"]', themeVars, {
  color: {
    text: {
      primary: '#000000',
      secondary: '#333333',
      tertiary: '#666666',
    },
    background: {
      primary: '#ffffff',
      secondary: '#f5f5f5',
      tertiary: '#e0e0e0',
    },
    border: {
      primary: '#e0e0e0',
      secondary: '#cccccc',
    },
    link: {
      primary: '#0066cc',
      hover: '#004499',
    },
    code: {
      background: '#f5f5f5',
      text: '#333333',
      inline: '#e63946',
    },
  },
});

// Dark theme
createGlobalTheme('[data-theme="dark"]', themeVars, {
  color: {
    text: {
      primary: '#ffffff',
      secondary: '#e0e0e0',
      tertiary: '#b0b0b0',
    },
    background: {
      primary: '#1a1a1a',
      secondary: '#2a2a2a',
      tertiary: '#3a3a3a',
    },
    border: {
      primary: '#3a3a3a',
      secondary: '#4a4a4a',
    },
    link: {
      primary: '#66b3ff',
      hover: '#99ccff',
    },
    code: {
      background: '#2a2a2a',
      text: '#e0e0e0',
      inline: '#ff6b7a',
    },
  },
});
