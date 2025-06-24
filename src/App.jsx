import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import PrinciplesBlock from "./components/PrinciplesBlock.jsx";
import ContactBlock from "./components/Contactblock.jsx";
import './index.css';

function App() {
  const [lang, setLang] = useState('en');

  return (
    <>
      <Header />
      <Hero />
      <About />
      <PrinciplesBlock />
      <ContactBlock />
    </>
  );
}

export default App;
