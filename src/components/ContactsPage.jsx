import React from 'react';

const ContactsPage = () => {
  return (
    <div className="bg-white font-manrope text-black min-h-screen">
      {/* Основной блок */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-10 pt-32 sm:pt-40 pb-20">
        {/* Заголовок */}
        <h2 className="text-xl sm:text-3xl font-extrabold uppercase text-blue-900 mb-8">
          / КОНТАКТЫ
        </h2>

        {/* Контент */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:gap-10">
          {/* Левая часть — фото */}
          <div className="mb-10 sm:mb-0 sm:w-1/2">
            <img
              src="./image/contacts.jpg"
              alt="Контакты"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Правая часть — текст */}
          <div className="text-base leading-relaxed sm:w-1/2">
            <p className="mb-4">
              RUWEAR — это про комфорт, честность и стиль, в котором хочется жить. Мы верим, что вещи должны говорить за тебя — и молчать, когда надо. Если у тебя есть вопросы по заказу, размерам, доставке или сотрудничеству — напиши нам. Мы здесь, чтобы помочь.
            </p>
            <p className="mb-6">
              Мы не прячемся за автответчиками — нам действительно важно, чтобы тебе всё подошло.
            </p>
            <p className="mb-2 font-semibold">Номер:</p>
            <p className="mb-4">+7 (999) 000-00-00</p>

            <p className="mb-2 font-semibold">Адрес:</p>
            <p className="mb-4">г. Москва, ул. Арбат, д. 32, кв. 17</p>

            <p className="mb-2 font-semibold">Почта:</p>
            <p>ruwear@yandex.ru</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactsPage;
