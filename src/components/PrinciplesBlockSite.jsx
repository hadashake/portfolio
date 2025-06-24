'use client';

import { useEffect, useRef, useState } from 'react';

const PrinciplesBlock = () => {
  const words = ['structure.', 'research.', 'design.', 'refine.'];
  const [currentTexts, setCurrentTexts] = useState(Array(words.length).fill(''));
  const blockRef = useRef(null);
  const timeoutsRef = useRef([]);
  const intervalsRef = useRef([]);

  const startAnimation = () => {
    clearAllTimers();
    setCurrentTexts(Array(words.length).fill(''));

    words.forEach((word, wordIndex) => {
      const timeout = setTimeout(() => {
        let i = 0;
        const interval = setInterval(() => {
          setCurrentTexts(prev => {
            const updated = [...prev];
            updated[wordIndex] = word.slice(0, i + 1);
            return updated;
          });
          i++;
          if (i === word.length) clearInterval(interval);
        }, 50);
        intervalsRef.current.push(interval);
      }, wordIndex * 1000);
      timeoutsRef.current.push(timeout);
    });
  };

  const clearAllTimers = () => {
    timeoutsRef.current.forEach(clearTimeout);
    intervalsRef.current.forEach(clearInterval);
    timeoutsRef.current = [];
    intervalsRef.current = [];
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        }
      },
      { threshold: 0.5 }
    );

    const el = blockRef.current;
    if (el) observer.observe(el);

    return () => {
      clearAllTimers();
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section
      ref={blockRef}
      className="min-h-screen flex flex-col justify-center items-center gap-8 sm:gap-10 px-6 sm:px-8 bg-white dark:bg-[#1C1C1E] transition-colors"
    >
      {currentTexts.map((text, index) => (
        <p
          key={index}
          className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] font-bold leading-tight text-[#1C1C1E] dark:text-white font-sans text-center"
        >
          {text}
        </p>
      ))}
    </section>
  );
};

export default PrinciplesBlock;
