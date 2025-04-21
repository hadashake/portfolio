import React from 'react';

const IntroSection = () => {
  return (
    <section id="next" className="w-full bg-[#F6F6F6] py-16 px-6 md:px-16 font-Manrope">
      <div className="max-w-[1440px] mx-auto">
        {/* Заголовок и описание */}
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-blue-900 mb-4">
          / ЗНАКОМСТВО С ЛИНИЕЙ RUWEAR
        </h2>
        <p className="text-sm md:text-base uppercase font-regular max-w-2xl mb-12 leading-relaxed">
          ОТКРОЙТЕ ДЛЯ СЕБЯ НОВОЕ ИЗМЕРЕНИЕ РОССИЙСКОЙ МОДЫ, СОЧЕТАЮЩЕЙ СМЕЛЫЕ ДИЗАЙНЕРСКИЕ РЕШЕНИЯ С НЕСТАРЕЮЩЕЙ ЭСТЕТИКОЙ.
        </p>

        <div className="flex flex-wrap gap-6 items-start">
          {/* Левая большая картинка */}
          <div className="w-full sm:w-[29%] flex justify-center">
            <img src="/image/model1.jpg" alt="Product 1" className="h-[580px] object-contain" />
          </div>

          {/* Правая часть */}
          <div className="flex-1 overflow-x-auto">
            <div className="min-w-[900px] flex justify-between gap-4">
              {/* Товар 2 */}
              <div className="w-[30%] flex flex-col items-start text-left">
                <img src="/image/model2.jpg" alt="RUWEAR HOODIE" className="h-[420px] object-contain" />
                <p className="mt-2 font-bold uppercase">RUWEAR HOODIE</p>
                <p className="text-sm">₽3200</p>
              </div>
              {/* Товар 3 */}
              <div className="w-[30%] flex flex-col items-start text-left">
                <img src="/image/model3.jpg" alt="RUWEAR ZIP-HOODIE" className="h-[420px] object-contain" />
                <p className="mt-2 font-bold uppercase">RUWEAR ZIP-HOODIE</p>
                <p className="text-sm">₽2499</p>
              </div>
              {/* Товар 4 */}
              <div className="w-[30%] flex flex-col items-start text-left">
                <img src="/image/model4.jpg" alt="RUWEAR T-SHIRT" className="h-[420px] object-contain" />
                <p className="mt-2 font-bold uppercase">RUWEAR T-SHIRT</p>
                <p className="text-sm">₽2000</p>
              </div>
            </div>

            {/* Подвал блока */}
            <div className="flex justify-between items-center mt-12 flex-wrap gap-6">
              <p className="uppercase font-regular tracking-wide text-sm md:text-base max-w-xl">
                ОКУНИТЕСЬ В МИР ИННОВАЦИОННЫХ РЕШЕНИЙ И СТИЛЬНЫХ ЭКСПЕРИМЕНТОВ.
              </p>
              <a
                href="/shop"
                className="uppercase font-extrabold tracking-wide border-b-2 border-black hover:opacity-70 transition text-sm md:text-base"
              >
                ПОЗНАКОМЬТЕСЬ С КОЛЛЕКЦИЕЙ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;