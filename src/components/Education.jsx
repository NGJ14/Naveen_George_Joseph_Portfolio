import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MapPin, Calendar } from 'lucide-react';
import './Education.css';

const Education = () => {
  return (
    <section className="section education" id="education">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <motion.div 
          className="education-card card glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="edu-header">
            <div className="edu-title-group">
              <div className="edu-icon-wrapper">
                <BookOpen size={24} className="text-gradient" />
              </div>
              <div>
                <h3>Vellore Institute of Technology (VIT)</h3>
                <h4 className="text-secondary" style={{ marginTop: '0.5rem' }}>Bachelor of Technology - Mechanical Engineering (Spec. in Manufacturing)</h4>
              </div>
            </div>
          </div>
          
          <div className="edu-details">
            <div className="edu-detail-item">
              <Calendar size={16} />
              <span>Sep 2022 – Jul 2026</span>
            </div>
            <div className="edu-detail-item">
              <MapPin size={16} />
              <span>Vellore</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
