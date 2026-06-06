import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import './Awards.css';

const Awards = () => {
  const awards = [
    { title: "Special Achiever's Award", issuer: "Vellore Institute of Technology (VIT)", year: "2025", type: "award" },
    { title: "2nd Position, International Rover Designing Challenge", issuer: "Science subsystems for Lunar Rover", year: "2025", type: "award" },
    { title: "4th Position Worldwide", issuer: "International Rover Challenge", year: "2025", type: "award" },
    { title: "3rd Position, CAM-Hack", issuer: "3D Modelling and Simulation of Manufacturing", year: "2024", type: "award" },
    { title: "Certified SOLIDWORKS Associate (CSWA)", issuer: "Dassault Systèmes", year: "2024", type: "cert" },
    { title: "Full Stack Developer (MERN)", issuer: "Certification", year: "2024", type: "cert" },
    { title: "Python (Basic)", issuer: "HackerRank", year: "2024", type: "cert" }
  ];

  return (
    <section className="section awards" id="awards">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Awards & Certifications
        </motion.h2>

        <div className="awards-grid">
          {awards.map((item, index) => (
            <motion.div 
              className="award-card glass" 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="award-icon">
                {item.type === 'award' ? <Award size={32} /> : <CheckCircle size={32} />}
              </div>
              <div className="award-content">
                <h3>{item.title}</h3>
                <p>{item.issuer}</p>
                <span className="award-year">{item.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
