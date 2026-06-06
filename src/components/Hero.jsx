import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Hexagon, Settings, Cpu } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-pattern"></div>
        {/* Animated Background Graphics */}
        <motion.div
          className="floating-graphic graphic-1"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Hexagon size={160} strokeWidth={1} />
        </motion.div>
        <motion.div
          className="floating-graphic graphic-2"
          animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Settings size={120} strokeWidth={1} />
        </motion.div>
        <motion.div
          className="floating-graphic graphic-3"
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Cpu size={140} strokeWidth={1} />
        </motion.div>
      </div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
             <br />
            <span className="text-gradient">Mechanical Design Engineer</span> & <br />
            <span className="text-gradient">Additive Manufacturing Maverick</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Mechanical design enthusiast with expertise in CAD, prototyping, and 3D printing. Passionate about engineering innovation, problem-solving, and developing efficient, manufacturable solutions.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="#projects" className="btn btn-primary">View Projects</a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <a href="#about">
          <ChevronDown size={32} className="bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
