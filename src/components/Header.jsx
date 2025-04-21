import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ isDark }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartIcon = isDark ? "/image/cart-white.svg" : "/image/cart-black.svg";
  const burgerIcon = isDark ? "/image/burgerwhite.svg" : "/image/burgerblack.svg";
  const closeIcon = isDark ? "/image/closewhite.svg" : "/image/closeblack.svg";

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`w-full absolute top-0 left-0 z-20 px-6 py-6 font-Manrope text-sm sm:text-base ${isDark ? "text-white" : "text-black"}`}>
      <div className="flex justify-between items-center w-full max-w-[1400px] mx-auto">
        {/* Левая часть */}
        <div className="flex items-center gap-8">
          <button onClick={toggleMenu} className="sm:hidden">
            <img src={menuOpen ? closeIcon : burgerIcon} alt="Меню" className="w-6 h-6" />
          </button>
          <div className="hidden sm:flex gap-10 uppercase font-medium">
            <Link to="/shop" className="hover:underline">Магазин</Link>
            <Link to="/#about" className="hover:underline" onClick={() => sessionStorage.setItem('scrollTo', 'about')}>О нас</Link>
          </div>
        </div>

        {/* Центр — логотип */}
        <Link to="/" className="text-2xl sm:text-4xl font-extrabold tracking-widest">RUWEAR</Link>

        {/* Правая часть */}
        <div className="flex items-center gap-8">
          <div className="hidden sm:flex gap-10 uppercase font-medium">
            <Link to="/contacts" className="hover:underline">Контакты</Link>
            <Link to="/#FAQ" className="hover:underline" onClick={() => sessionStorage.setItem('scrollTo', 'about')}>FAQ</Link>
          </div>
          <Link to="/cart">
            <img src={cartIcon} alt="Корзина" className="w-6 h-6 sm:w-7 sm:h-7" />
          </Link>
        </div>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-blue-900 text-white flex flex-col px-6 py-6 z-30">
          {/* Верхняя панель — крестик, логотип и корзина */}
          <div className="flex justify-between items-center mb-12">
            <button onClick={toggleMenu}>
              <img src={closeIcon} alt="Закрыть" className="w-6 h-6" />
            </button>
            <Link to="/" className="text-2xl font-extrabold tracking-widest">RUWEAR</Link>
            <Link to="/cart" onClick={toggleMenu}>
              <img src="/image/cart-white.svg" alt="Корзина" className="w-6 h-6" />
            </Link>
          </div>

          {/* Навигация */}
          <div className="flex flex-col gap-6 uppercase text-base font-medium">
            <Link to="/shop" onClick={toggleMenu}>Магазин</Link>
            <Link to="/#about" onClick={() => { toggleMenu(); sessionStorage.setItem('scrollTo', 'about'); }}>О нас</Link>
            <Link to="/contacts" onClick={toggleMenu}>Контакты</Link>
            <Link to="/#FAQ" onClick={() => { toggleMenu(); sessionStorage.setItem('scrollTo', 'about'); }}>FAQ</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
