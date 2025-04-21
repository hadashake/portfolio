import MainImage from '../images/main2.jpg';

const Hero = () => {
  return (
    <section
      className="relative h-screen w-full text-white font-Manrope bg-cover bg-center"
      style={{ backgroundImage: `url(${MainImage})` }}
    >
      {/* затемнение фона */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      {/* Контент поверх */}
      <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-10">
        {/* Верхняя надпись “Новый / Стиль” */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center text-5xl sm:text-6xl font-extrabold uppercase w-full gap-2 text-center sm:text-left">
          <span>Новый</span>
          <span className="sm:translate-y-0 translate-y-8">Стиль</span>
        </div>

        {/* Описание по центру */}
        <div className="flex justify-center mt-6">
          <p className="text-base sm:text-2xl font-medium max-w-md text-center sm:-translate-y-20 mt-4">
            Смелый дизайн. Ограниченная коллекция. <br className="hidden sm:block" />
            Создано для современных людей.
          </p>
        </div>

        {/* Кнопка и стрелочка внизу */}
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center">
          <a
            href="#next"
            className="mb-3 px-6 py-2 sm:px-6 sm:py-3 border border-white rounded-full text-xs sm:text-sm uppercase tracking-wider hover:bg-white hover:text-black transition"
          >
            Подробнее
          </a>
          <img
            src="/image/Vector.svg"
            alt="Стрелка вниз"
            className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
