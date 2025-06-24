'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const About = () => {
  return (
    <section
      id="about"
      className="px-6 sm:px-[32px] md:px-[64px] lg:px-[112px] py-[64px] bg-white text-[#1C1C1E] dark:bg-[#1C1C1E] dark:text-white"
    >
      <div className="flex flex-col gap-[48px]">
        {/* Заголовки */}
        <div className="flex flex-col gap-2">
          <motion.h1
            className="text-[24px] sm:text-[28px] font-bold leading-snug text-[#6E6E73]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            custom={0}
          >
            👋 Hello!
          </motion.h1>
          <motion.h1
            className="text-[24px] sm:text-[28px] font-bold leading-snug text-[#6E6E73]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            custom={1}
          >
            My name is Daria Chuvakova.
          </motion.h1>
          <motion.h2
            className="text-[24px] sm:text-[28px] font-bold leading-snug text-inherit max-w-[800px]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            custom={2}
          >
            I’m a UI/UX designer based in Moscow with over a year of experience.
          </motion.h2>
        </div>

        {/* Контент и проекты */}
        <div className="flex flex-col gap-[48px]">
          {/* Описание */}
          <motion.div
            className="flex flex-col gap-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            custom={3}
          >
            <p className="text-[18px] sm:text-[20px] font-bold leading-snug text-inherit">
              I focus on building clean and thoughtful digital interfaces where structure, clarity, and logic come together to create better user experiences.
            </p>
            <p className="text-[14px] text-[#6E6E73] font-semibold">
              I started with code and stayed for design.
            </p>
          </motion.div>

{/* Проекты */}
<motion.div
  className="flex flex-col gap-4"
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  custom={4}
>
  <h3 className="text-[20px] sm:text-[24px] font-bold text-inherit">Projects</h3>
  <div className="flex flex-col gap-6 text-[14px] sm:text-[16px]">
    <div>
      <a
        href="https://www.behance.net/gallery/228864283/OpenTalk"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 font-bold text-inherit hover:text-[#6E6E73] transition-colors"
      >
        OpenTalk — Therapy Service
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>
      <p className="text-[#6E6E73] mt-1">
        A calm and inclusive landing page for an online psychotherapy platform. Built for trust and accessibility.
      </p>
    </div>

    <div>
      <a
        href="https://www.behance.net/gallery/211716965/DIZLAB-online-design-school"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 font-bold text-inherit hover:text-[#6E6E73] transition-colors"
      >
        DIZLAB — Design School Platform
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>
      <p className="text-[#6E6E73] mt-1">
        A bold and structured website for an online design school. Focused on creative career growth.
      </p>
    </div>
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
