import React from 'react';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
     <Skills />
     <Contact />
    <Footer />
    </>
  );
}

export default App;
