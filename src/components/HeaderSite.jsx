import { useEffect, useState } from 'react';
import { Moon, Sun, HelpCircle, Phone } from 'lucide-react';

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
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full h-[88px] flex items-center justify-between px-8 py-4 bg-white dark:bg-[#1C1C1E] text-[#1C1C1E] dark:text-white">

      {/* Логотип */}
      <div className="text-[20px] font-semibold whitespace-nowrap">
        DCH / design
      </div>

      {/* Навигация */}
      <div className="flex items-center gap-4">
        {/* Текстовая навигация — показывается только на md и выше */}
        <div className="hidden md:flex items-center gap-6 text-[16px]">
          <button onClick={() => scrollToSection('#about')}>about</button>
          <button onClick={() => scrollToSection('#contacts')}>contacts</button>
        </div>

        {/* Иконки — только на мобильной версии */}
        <div className="flex md:hidden items-center gap-4">
          <button onClick={() => scrollToSection('#about')} aria-label="О разделе">
            <HelpCircle size={24} />
          </button>
          <button onClick={() => scrollToSection('#contacts')} aria-label="Контакты">
            <Phone size={24} />
          </button>
        </div>

        {/* Переключатель темы */}
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="w-8 h-8 rounded-full flex items-center justify-center bg-[#1C1C1E] dark:bg-white text-white dark:text-black transition"
          aria-label="Сменить тему"
        >
          {theme === 'light' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
  