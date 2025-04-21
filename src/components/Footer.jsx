import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1C4A88] text-white px-10 py-12 font-manrope">
      <div className="max-w-[1440px] mx-auto flex justify-between flex-wrap gap-10">

        {/* Left Block — Logo + Text */}
        <div className="max-w-[300px]">
          <h2 className="text-3xl font-extrabold mb-4">RUWEAR</h2>
          <p className="text-base font-regular mb-2">Современный российский бренд одежды.</p>
          <p className="text-base">Создан для тех, кто ценит стиль и самовыражение</p>
        </div>

        {/* Navigation */}
        <div className="min-w-[150px]">
          <h3 className="text-lg font-bold mb-4">Навигация</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Каталог</a></li>
            <li><a href="#" className="hover:underline">Магазин</a></li>
            <li><a href="#" className="hover:underline">Контакты</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Contacts + Socials */}
        <div className="min-w-[220px]">
          <h3 className="text-lg font-bold mb-4">Контакты</h3>
          <p className="mb-2">+7 (999) 999-99-99</p>
          <p className="mb-8">welcome@ruwear.com</p>

          {/* Socials under Contacts */}
          <h3 className="text-lg font-bold mb-4">Мы в соцсетях</h3>
          <div className="flex gap-4">
            <img src="./image/vk.svg" alt="vk" className="w-10 h-10" />
            <img src="./image/inst.svg" alt="instagram" className="w-10 h-10" />
            <img src="./image/you.svg" alt="youtube" className="w-10 h-10" />
            <img src="./image/tg.svg" alt="telegram" className="w-10 h-10" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1440px] mx-auto mt-10 flex justify-between items-center flex-wrap text-sm text-white/80 gap-4 border-t border-white/20 pt-4">
        <p>© 2024</p>
        <div className="flex gap-6 underline underline-offset-2">
          <span>Политика конфиденциальности</span>
          <span>Договор оферты</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
