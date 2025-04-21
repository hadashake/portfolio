import React, { useState } from 'react';
import arrowRight from '../images/aright.svg';
import arrowDown from '../images/adown.svg';

const faqData = [
  {
    question: 'Куда вы доставляете свои товары?',
    answer: 'Мы доставляем товары по всей России и в страны СНГ.',
  },
  {
    question: 'Сколько длится доставка?',
    answer: 'Среднее время доставки — от 3 до 7 рабочих дней.',
  },
  {
    question: 'Можно ли вернуть товар?',
    answer: 'Да, вы можете вернуть товар в течение 14 дней.',
  },
  {
    question: 'Как я могу отследить свой заказ?',
    answer: 'После оформления заказа вы получите трек-номер.',
  },
  {
    question: 'Какие способы оплаты вы принимаете?',
    answer: 'Мы принимаем карты Visa, Mastercard, Мир и оплату при получении.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="FAQ" className="w-full bg-[#F6F6F6] py-16 px-6 sm:py-20 sm:px-10 font-manrope">
      <div className="max-w-[1440px] mx-auto">
        {/* Заголовок */}
        <h2 className="text-xl sm:text-4xl font-extrabold uppercase text-blue-900 mb-10 sm:mb-12">
          / ОТВЕТЫ НА ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
        </h2>

        {/* Мобильный / десктопный контейнер */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start sm:gap-10">
          {/* Вопросы */}
          <div className="w-full sm:w-1/2">
            <div className="space-y-5">
              {faqData.map((item, index) => (
                <div key={index}>
                  <div
                    className="flex justify-between items-center cursor-pointer pb-3 border-b border-black"
                    onClick={() => toggle(index)}
                  >
                    <p className="text-base sm:text-[20px] font-medium">{item.question}</p>
                    <img
                      src={openIndex === index ? arrowDown : arrowRight}
                      alt="toggle"
                      className="w-5 h-5"
                    />
                  </div>
                  {openIndex === index && (
                    <div className="text-sm sm:text-base text-gray-700 pt-2 pb-4">{item.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Фото (только на десктопе) */}
          <div className="hidden sm:block relative w-1/2 h-[650px]">
            <img
              src="/image/faq2.jpg"
              alt="faq2"
              className="absolute top-[120px] right-[3px] w-[320px] h-[420px] object-cover"
            />
            <img
              src="/image/faq1.jpg"
              alt="faq1"
              className="absolute bottom-0 left-[8px] w-[320px] h-[420px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
