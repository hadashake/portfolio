import { useState } from 'react';
import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";
import About from "./components/about";
import PrinciplesBlock from "./components/principlesBlock.jsx";
import ContactBlock from "./components/contactblock.jsx";
import './index.css';

function App() {
  const [lang, setLang] = useState('en');

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <PrinciplesBlock lang={lang} />
      <ContactBlock lang={lang} />
    </>
  );
}

export default App;
