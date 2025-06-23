import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import CharacterCounter from './CharacterCounter';
import './index.css';

function ThemedAppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}`}>
      <h1>Hello, Theme Switcher!</h1>
      <ThemeSwitcher />
      <hr />
      <CharacterCounter />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedAppContent />
    </ThemeProvider>
  );
}

export default App;
