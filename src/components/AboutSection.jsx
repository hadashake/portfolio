import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-[#F6F6F6] py-16 px-6 sm:py-20 sm:px-10 font-manrope">
      <div className="max-w-[1440px] mx-auto">
        {/* Заголовок */}
        <h2 className="text-2xl sm:text-4xl font-extrabold uppercase text-blue-900 mb-10 sm:mb-12">
          / О НАС
        </h2>

        {/* Мобильная и десктопная разметка */}
        <div className="flex flex-col sm:flex-row sm:justify-start sm:items-end sm:gap-6">
          {/* Левая колонка */}
          <div className="flex flex-col items-center sm:block">
            <img
              src="../image/about1.jpg"
              alt="About 1"
              className="w-[250px] sm:w-[555px] h-auto object-contain mb-6 sm:mb-0"
            />
            <div className="w-full max-w-[320px] sm:hidden">
              <p className="text-base font-regular leading-[1.6] text-left">
                Мы создаём современную одежду, вдохновлённую эстетикой будущего. <br />Ruwear — это не просто бренд, это способ выразить себя.
              </p>
            </div>
          </div>

          {/* Центр: фото + текст */}
          <div className="flex flex-col items-center sm:justify-between sm:h-[730px] sm:mx-[30px]">
            <img
              src="../image/about2.jpg"
              alt="About 2"
              className="w-[250px] sm:w-[300px] h-auto object-contain mb-6"
            />
            <div className="w-full max-w-[320px] sm:max-w-[500px]">
              <p className="text-base sm:text-xl font-regular leading-[1.7] text-left">
                наш путь начался со страсти к инновационному дизайну и стремления
                создавать уникальную, высококачественную одежду. Ruwear сочетает
                вневременную эстетику с передовой модой, предлагая вещи, которые
                резонируют с уверенностью к себе и индивидуальностью.
              </p>
            </div>
          </div>

          {/* Правая колонка только для десктопа */}
          <div className="hidden sm:flex flex-col justify-between h-[730px]">
            <p className="text-xl leading-[1.6] max-w-[400px] mb-4 mt-10">
              Мы создаём современную одежду, вдохновлённую эстетикой будущего.
              <br /> Ruwear — это не просто бренд, это способ выразить себя.
            </p>
            <img
              src="../image/about3.jpg"
              alt="About 3"
              className="w-[300px] h-[400px] object-contain"
            />
          </div>

          {/* Mobile отдельный блок для фото about3 */}
          <div className="sm:hidden mt-6 flex justify-center">
            <img
              src="../image/about3.jpg"
              alt="About 3"
              className="w-[250px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
