import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Code, Cpu, Layers } from 'lucide-react';
import './About.css';

const About = () => {
  const cards = [
    {
      icon: <Layers className="about-icon" />,
      title: "Mechanical Design",
      description: "Spearheading the design of complex mechanical systems and linkages using tools like Fusion 360 and SolidWorks."
    },
    {
      icon: <Cpu className="about-icon" />,
      title: "Additive Manufacturing",
      description: "Developing highly manufacturable solutions utilizing rapid prototyping and advanced 3D printing techniques."
    },
    {
      icon: <PenTool className="about-icon" />,
      title: "Product Engineering",
      description: "Applying DFM/DFA methodologies, evaluating hardware solutions, and managing product development lifecycles."
    },
    {
      icon: <Code className="about-icon" />,
      title: "Digital Interfaces",
      description: "Building clean, responsive web applications to effectively present and support complex engineering projects."
    }
  ];

  return (
    <section className="section about" id="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I am a <strong>Mechanical Design Engineer</strong> with a strong focus on additive manufacturing and product development. 
              Currently pursuing my B.Tech in Mechanical Engineering (Spec. in Manufacturing) at Vellore Institute of Technology, 
              I have developed a profound passion for solving complex engineering problems through innovative CAD modeling and rapid prototyping.
            </p>
            <p>
              Whether I am designing bio-inspired end-of-arm tooling, engineering active suspension systems for tracked robotics, 
              or occasionally developing clean web interfaces to showcase my work, my approach is rooted in analytical thinking, 
              iterative design, and delivering highly manufacturable, premium solutions.
            </p>
            
            <div className="stats-container">
              <div className="stat-item">
                <h3 className="text-gradient">3+</h3>
                <p>Patents Filed</p>
              </div>
              <div className="stat-item">
                <h3 className="text-gradient">4+</h3>
                <p>Internships</p>
              </div>
              <div className="stat-item">
                <h3 className="text-gradient">5+</h3>
                <p>Major Awards</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-grid"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {cards.map((card, index) => (
              <div className="card about-card" key={index}>
                <div className="icon-wrapper glass">
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
