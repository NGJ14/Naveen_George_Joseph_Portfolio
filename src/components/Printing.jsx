import React from 'react';
import { motion } from 'framer-motion';
import './Printing.css';

const Printing = () => {
  const images = [
    "./images/printing/IMG_0303.jpg",
    "./images/printing/IMG_1819.jpg",
    "./images/printing/IMG_1913.jpg",
    "./images/printing/IMG_2087.jpg",
    "./images/printing/IMG_5735.JPG",
    "./images/printing/PXL_20250610_014009376.PORTRAIT.jpg",
    "./images/printing/PXL_20250726_013148925.jpg",
    "./images/printing/PXL_20250806_065732433.PORTRAIT.ORIGINAL.jpg",
    "./images/printing/Screenshot 2026-06-06 140103.png"
  ];

  return (
    <section className="section printing" id="printing">
      <div className="container">
        <div className="printing-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            3D Printing & Prototyping
          </motion.h2>
          <motion.p 
            className="printing-desc text-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Bringing digital designs into the physical world. I leverage my Bambu Lab A1 Mini to rapidly iterate, test structural tolerances, and bring hobbyist concepts to life with high-quality additive manufacturing.
          </motion.p>
        </div>

        <motion.div 
          className="masonry-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {images.map((src, index) => (
            <div className="masonry-item" key={index}>
              <img src={src} alt={`3D Printing Project ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Printing;
