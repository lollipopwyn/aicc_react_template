import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import './navbar.css';

const ModeCtrl = () => {
  const [darkMode, setDarkMode] = useState(true);

  // document.documentElement.style.setProperty('color-scheme', 'light');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty('color-scheme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty('color-scheme', 'light');
    }
  });

  return (
    <button
      className="mode_btn dark:bg-slate-800 dark:text-slate-100 bg-slate-100 text-slate-800 p-1 ml-2"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <Sun className="w-5 h-5" /> : <Moon />}
    </button>
  );
};

export default ModeCtrl;
