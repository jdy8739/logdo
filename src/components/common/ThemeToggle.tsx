import { useTheme } from '../../contexts/ThemeContext';
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi';
import { toggleButton, iconButton, active } from './ThemeToggle.css';

const ThemeToggle = () => {
  const { themeMode, setThemeMode } = useTheme();

  return (
    <div className={toggleButton}>
      <button
        className={`${iconButton} ${themeMode === 'light' ? active : ''}`}
        onClick={() => setThemeMode('light')}
        aria-label="Light mode"
        title="Light mode"
      >
        <FiSun />
      </button>
      <button
        className={`${iconButton} ${themeMode === 'dark' ? active : ''}`}
        onClick={() => setThemeMode('dark')}
        aria-label="Dark mode"
        title="Dark mode"
      >
        <FiMoon />
      </button>
      <button
        className={`${iconButton} ${themeMode === 'system' ? active : ''}`}
        onClick={() => setThemeMode('system')}
        aria-label="System mode"
        title="System mode"
      >
        <FiMonitor />
      </button>
    </div>
  );
};

export default ThemeToggle;
