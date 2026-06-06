import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          <span className="text-gradient">Naveen</span> George Joseph
        </a>

        {/* Desktop Nav */}
        <ul className="nav-links desktop-nav">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="nav-link">{link.name}</a>
            </li>
          ))}
        </ul>

        <div className="nav-contact desktop-nav">
          <span className="nav-contact-link">9591223332</span>
          <span className="nav-contact-link">naveengjoseph@gmail.com</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mobile-nav glass"
            >
              <ul className="mobile-nav-links">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="mobile-nav-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li style={{ marginTop: '1rem' }}>
                  <span className="mobile-nav-link" style={{fontSize: '1rem', color: 'var(--text-secondary)'}}>9591223332</span>
                </li>
                <li>
                  <span className="mobile-nav-link" style={{fontSize: '1rem', color: 'var(--text-secondary)'}}>naveengjoseph@gmail.com</span>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
