import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-screen bg-[#F6F6F6] flex font-manrope">
      {/* Левая часть — список товаров */}
      <div className="w-2/3 px-10 py-12">
        {/* Стрелочка и заголовок */}
        <button onClick={() => navigate(-1)} className="text-2xl mb-6">←</button>
        <h1 className="text-4xl font-bold mb-10">КОРЗИНА</h1>

        {/* Заголовки таблицы */}
        <div className="flex justify-between text-sm text-gray-600 uppercase border-b pb-3 mb-6">
          <span>Товары</span>
          <span>Количество</span>
          <span>Сумма</span>
        </div>

        {/* Тут потом будут товары */}
      </div>

      {/* Правая часть — итог */}
      <div className="w-1/3 bg-[#2F2F2F] text-white px-8 py-12 flex flex-col justify-start min-h-screen">
        <h2 className="text-xl font-semibold mb-8">СУММА ЗАКАЗА</h2>

        {/* Пока статичные значения */}
        <div className="flex justify-between mb-3 text-sm">
          <span>Подытог</span>
          <span>₽3200</span>
        </div>
        <div className="flex justify-between mb-4 text-sm">
          <span>Доставка</span>
          <span>₽1000</span>
        </div>
        <div className="border-t border-white/20 my-4" />
        <div className="flex justify-between text-lg font-bold mb-6">
          <span>Итого</span>
          <span>₽4200</span>
        </div>

        <button className="bg-white text-black py-3 font-medium hover:bg-gray-200 transition-all">Оформить заказ</button>
      </div>
    </section>
  );
};

export default Cart;
