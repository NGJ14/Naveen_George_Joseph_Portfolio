import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'CAD/CAM', level: 90 },
    { name: '3D Printing', level: 95 },
    { name: 'Rapid Prototyping', level: 85 },
    { name: 'Reverse Engineering', level: 80 },
    { name: 'Machining', level: 75 },
    { name: 'Front-End (HTML/CSS/React)', level: 85 }
  ];

  // Reference local images for tools (to be saved in public/logos/ directory)
  const exactTools = [
    { name: 'Fusion 360', icon: './logos/fusion.webp' },
    { name: 'SolidWorks', icon: './logos/solidworks.png' },
    { name: 'AutoCAD', icon: './logos/autocad.webp' },
    { name: 'Cura', icon: './logos/cura.webp' },
    { name: 'SeeNC', icon: './logos/seenc.webp' },
    { name: 'Python', icon: './logos/python.webp' },
    { name: 'React JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' }
  ];

  const softSkills = [
    'Project Management', 'Problem-Solving', 'Time Management', 'Analytical Thinking', 'Team Leadership', 'Cross-functional Collaboration'
  ];

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Tools
        </motion.h2>

        <div className="skills-container">
          <motion.div 
            className="skills-col card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="skills-title">Technical Expertise</h3>
            <div className="progress-bars">
              {technicalSkills.map((skill, index) => (
                <div className="progress-item" key={index}>
                  <div className="progress-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="progress-bg">
                    <motion.div 
                      className="progress-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="skills-col-right">
            <motion.div 
              className="skills-col card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="skills-title">Software Tools</h3>
              <div className="tools-grid">
                {exactTools.map((tool, index) => (
                  <div className="tool-card" key={index}>
                    <img src={tool.icon} alt={tool.name} className="tool-icon" />
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="skills-col card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="skills-title">Soft Skills</h3>
              <div className="tags-container">
                {softSkills.map((skill, index) => (
                  <span className="skill-tag soft-tag" key={index}>{skill}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
