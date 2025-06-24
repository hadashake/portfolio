'use client';

import { useEffect, useState } from "react";

export default function Hero() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop < 100) {
        setStep(0);
      } else if (scrollTop >= 100 && scrollTop < 300) {
        setStep(1);
      } else {
        setStep(2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[300vh] bg-white dark:bg-[#1C1C1E] transition-colors duration-500">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="text-center px-6 sm:px-[24px]">
          <div className="overflow-hidden">
            <h1
              className={`text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-tight transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] text-[#1C1C1E] dark:text-white ${
                step >= 1
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Hi, I’m Daria. <br />
              I’m UI/UX designer.
            </h1>
          </div>

          <p
            className={`mt-4 text-[16px] text-[#6E6E73] dark:text-[#A1A1AA] transition-all duration-700 delay-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
              step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            I design simple and structured digital interfaces.
          </p>
        </div>
      </div>
    </div>
  );
}
