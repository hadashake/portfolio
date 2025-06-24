import { useState } from 'react';
import Header from './components/HeaderSite.jsx';
import Hero from "./components/HeroSite.jsx";
import About from "./components/AboutPort.jsx";
import PrinciplesBlock from "./components/PrinciplesBlockSite.jsx";
import ContactBlock from "./components/ContactBlocks.jsx";
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
