import React from 'react';

const DiscountBanner = () => {
  return (
    <section className="w-full bg-[#F6F6F6] py-16 px-10 font-Manrope">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        
        {/* Текстовая часть */}
        <div className="max-w-xl flex flex-col gap-6">
          <h2 className="text-5xl font-bold uppercase text-[#343233]">Скидка 15%</h2>
          <p className="text-base md:text-lg font-regular text-[#343233]">
            ИСПОЛЬЗУЙТЕ ПРОМОКОД: <span className="font-bold">RUWEAR15</span><br />
            ПРИ ОФОРМЛЕНИИ ЗАКАЗА.
          </p>
          <a
            href="/shop"
            className="inline-block bg-[#1C3D77] text-white px-8 py-4 text-sm font-regular uppercase transition hover:bg-black text-center"
          >
            ПЕРЕЙТИ К КОЛЛЕКЦИИ
          </a>
        </div>

        {/* Фото */}
        <div className="w-full md:w-[35%]">
          <img
            src="/image/discount-model.png" // Убедись, что изображение в public/image
            alt="Discount Model"
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default DiscountBanner;
