import LightIcon from '../../assets/svg-icons/light.svg?react';
import DarkIcon from '../../assets/svg-icons/dark.svg?react';
import './darkToggleButton.css'

type DarkToggleButtonProps = {
  isDark: boolean;
  toggleTheme: () => void;
};

export default function DarkToggleButton ({isDark, toggleTheme} : DarkToggleButtonProps) {
  return (
    <label className="theme-toggle-label" htmlFor="theme-toggle">
      <input
        type="checkbox"
        id="theme-toggle"
        className="theme-toggle-input"
        checked={isDark}
        onChange={toggleTheme}
        aria-label="Toggle dark mode"
      />
      <div className="theme-toggle-slider">
        <LightIcon className='dark-mode-toggle-icon' />
        <DarkIcon />
        <div className="toggle-ball"></div>
      </div>
    </label>
  )
}