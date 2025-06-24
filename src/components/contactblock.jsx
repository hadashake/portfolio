'use client';

import { motion } from 'framer-motion';

const contacts = [
  { name: "designchuw@outlook.com", link: "mailto:designchuw@outlook.com" },
  { name: "behance", link: "https://www.behance.net/kitty13" },
  { name: "Telegram", link: "https://t.me/+ldD5xIhF1fhhOTBi" },
  { name: "Instagram", link: "https://www.instagram.com/hdvskdasha?igsh=M25tbjQwbTMyc2Zi&utm_source=qr" },
  { name: "TikTok", link: "https://www.tiktok.com/@dasha_dsh1?_t=ZS-8xTRqFac2x6&_r=1" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const ContactBlock = () => {
  return (
    <section
      id="contacts"
      className="px-[112px] py-[64px] bg-white dark:bg-[#1C1C1E]"
    >
      <motion.h2
        className="text-[32px] font-bold text-[#1C1C1E] dark:text-white"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        custom={0}
      >
        Clean design starts with clean contact.
      </motion.h2>

      <div className="mt-[48px] flex flex-col gap-[10px]">
        {contacts.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[24px] font-semibold text-[#6E6E73] dark:text-[#A1A1AA] hover:text-[#1C1C1E] dark:hover:text-white hover:underline underline-offset-4 transition-colors duration-200"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            custom={i + 1}
          >
            {item.name}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ContactBlock;
