import React from 'react';

const CategoryCloud = () => {
  return (
    <section className="w-full bg-[#F6F6F6] py-16 px-6 sm:py-24 sm:px-10 font-manrope relative">
      <div className="max-w-[1280px] mx-auto relative">
        {/* Десктопная версия */}
        <div className="hidden sm:block min-h-[360px]">
          <a href="/shop" className="absolute left-[40%] top-0 text-[54px] font-bold text-gray-500 hover:text-black transition uppercase leading-[1.1]">
            ВСЯ КОЛЛЕКЦИЯ <span className="text-base align-super">/ 150 /</span>
          </a>

          <a href="/shop/tshirts" className="absolute left-[19%] top-[64px] text-[54px] font-bold text-gray-500 hover:text-black transition uppercase leading-[1.1]">
            ФУТБОЛКИ <span className="text-sm align-super">/ 45 /</span>
          </a>

          <a href="/shop/hoodies" className="absolute left-[42%] top-[130px] text-[54px] font-bold text-gray-500 hover:text-black transition uppercase leading-[1.1]">
            ТОЛСТОВКИ <span className="text-sm align-super">/ 65 /</span>
          </a>

          <a href="/shop/jeans" className="absolute left-[19%] top-[200px] text-[54px] font-bold text-gray-500 hover:text-black transition uppercase leading-[1.1]">
            ДЖИНСЫ <span className="text-sm align-super">/ 15 /</span>
          </a>

          <a href="/shop/jackets" className="absolute left-[56%] top-[200px] text-[54px] font-bold text-gray-500 hover:text-black transition uppercase leading-[1.1]">
            КУРТКИ <span className="text-sm align-super">/ 25 /</span>
          </a>
        </div>

        {/* Мобильная версия */}
        <div className="flex flex-col sm:hidden gap-4 text-[24px] font-bold text-gray-500 uppercase leading-[1.1]">
          <a href="/shop" className="hover:text-black">
            ВСЯ КОЛЛЕКЦИЯ <span className="text-sm align-super">/ 150 /</span>
          </a>
          <a href="/shop/tshirts" className="hover:text-black">
            ФУТБОЛКИ <span className="text-sm align-super">/ 45 /</span>
          </a>
          <a href="/shop/jeans" className="hover:text-black">
            ДЖИНСЫ <span className="text-sm align-super">/ 15 /</span>
          </a>
          <a href="/shop/hoodies" className="hover:text-black">
            ТОЛСТОВКИ <span className="text-sm align-super">/ 65 /</span>
          </a>
          <a href="/shop/jackets" className="hover:text-black">
            КУРТКИ <span className="text-sm align-super">/ 25 /</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategoryCloud;
