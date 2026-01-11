import { useTheme } from '../../contexts/ThemeContext';
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi';
import { iconButton } from './ThemeToggle.css';

const ThemeToggle = () => {
  const { themeMode, setThemeMode } = useTheme();

  const cycleTheme = () => {
    if (themeMode === 'light') {
      setThemeMode('dark');
    } else if (themeMode === 'dark') {
      setThemeMode('system');
    } else {
      setThemeMode('light');
    }
  };

  const getIcon = () => {
    switch (themeMode) {
      case 'light':
        return <FiSun />;
      case 'dark':
        return <FiMoon />;
      case 'system':
        return <FiMonitor />;
      default:
        return <FiSun />;
    }
  };

  const getTitle = () => {
    switch (themeMode) {
      case 'light':
        return 'Light mode (click for dark)';
      case 'dark':
        return 'Dark mode (click for system)';
      case 'system':
        return 'System mode (click for light)';
      default:
        return 'Toggle theme';
    }
  };

  return (
    <button
      className={iconButton}
      onClick={cycleTheme}
      aria-label="Toggle theme"
      title={getTitle()}
    >
      {getIcon()}
    </button>
  );
};

export default ThemeToggle;
