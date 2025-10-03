import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeMode = 'light' | 'dark' | 'system';
type EffectiveTheme = 'light' | 'dark';

interface ThemeContextType {
  themeMode: ThemeMode;
  effectiveTheme: EffectiveTheme;
  setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'theme';

const getSystemTheme = (): EffectiveTheme => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const getStoredTheme = (): ThemeMode => {
  if (typeof window === 'undefined') return 'system';
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === 'light' || stored === 'dark' || stored === 'system') {
    return stored;
  }
  return 'system';
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeModeState] = useState<ThemeMode>('system');
  const [effectiveTheme, setEffectiveTheme] = useState<EffectiveTheme>('light');

  // Initialize theme on mount
  useEffect(() => {
    const storedTheme = getStoredTheme();
    setThemeModeState(storedTheme);

    const effective = storedTheme === 'system' ? getSystemTheme() : storedTheme;
    setEffectiveTheme(effective);
    document.documentElement.setAttribute('data-theme', effective);
  }, []);

  // Update effective theme when themeMode changes
  useEffect(() => {
    const effective = themeMode === 'system' ? getSystemTheme() : themeMode;
    setEffectiveTheme(effective);
    document.documentElement.setAttribute('data-theme', effective);
  }, [themeMode]);

  // Listen for system theme changes when in system mode
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      if (themeMode === 'system') {
        setEffectiveTheme(e.matches ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [themeMode]);

  const setThemeMode = (mode: ThemeMode) => {
    setThemeModeState(mode);
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  };

  return (
    <ThemeContext.Provider value={{ themeMode, effectiveTheme, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
