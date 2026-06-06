import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Printing from './components/Printing';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Printing />
        <Skills />
        <Awards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
