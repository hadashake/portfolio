'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Header = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full px-[112px] py-[32px] bg-white dark:bg-[#1C1C1E] flex justify-between items-center text-[#1C1C1E] dark:text-white font-sans text-[16px] transition-colors duration-300 z-50">
      <div className="font-semibold text-[16px]">DCH / design</div>

      <nav className="flex items-center space-x-6">
        <button onClick={() => scrollToSection('#about')} className="hover:underline underline-offset-4">
          about
        </button>
        <button onClick={() => scrollToSection('#contacts')} className="hover:underline underline-offset-4">
          contacts
        </button>

        {/* Theme toggle */}
        <div className="flex space-x-2">
          <button
            onClick={() => setTheme('light')}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
              theme === 'light' ? 'bg-black text-white' : 'text-black dark:text-white'
            }`}
          >
            <Sun className="w-5 h-5" />
          </button>
          <button
            onClick={() => setTheme('dark')}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
              theme === 'dark' ? 'bg-white text-black' : 'text-black dark:text-white'
            }`}
          >
            <Moon className="w-5 h-5" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
