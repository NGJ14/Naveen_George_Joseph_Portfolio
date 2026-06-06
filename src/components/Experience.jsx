import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "3D Printing & Digital Workplace Solutions Intern",
      company: "Airbus",
      date: "Feb 2026 - Present",
      logo: "./logos/airbus.png",
      description: [
        "Supporting the development and deployment of 3D printing and additive manufacturing solutions within the Digital Workplace ecosystem.",
        "Building a dedicated product for Airbus users, enabling access to 3D design and fabrication technologies.",
        "Evaluating existing 3D solutions, service management processes, and technology transition activities.",
        "Engaging with cross-functional global teams to apply product management methodologies."
      ]
    },
    {
      role: "Product Space Designer",
      company: "Centre of Excellence in Design (D-CoE) - DM, IISc",
      date: "Dec 2025 - Feb 2026",
      logo: "./logos/iisc.jpg",
      description: [
        "Responsible for the design and planning of innovative solutions in storage and layouts."
      ]
    },
    {
      role: "Mechanical Design Engineer",
      company: "Mecha Systems",
      date: "May 2025 - Jan 2026",
      logo: "./logos/mecha.png",
      description: [
        "Spearheaded mechanical design of standard extensions for the Comet device, including keyboard and gamepad extensions."
      ]
    },
    {
      role: "Mechanical Lead",
      company: "Team RoverX",
      date: "2024 - 2025",
      logo: "./logos/roverx.png",
      description: [
        "Led design, simulation, prototyping, and manufacturing of advanced Mars Rover prototypes.",
        "Expertise in 3D printing with technical materials such as ABS, PLA, and TPU.",
        "Hands-on experience with machining tools: Drilling, Lathe, and Precision Angle Grinding.",
        "Conducted feasibility studies for material selection and manufacturing processes."
      ]
    },
    {
      role: "Front End Web Development Intern",
      company: "Lume Digital Pvt Ltd",
      date: "Mar 2024 - Aug 2024",
      logo: "./logos/lume.jpg",
      description: [
        "Developed responsive and user-friendly web interfaces for clients using HTML, CSS, JavaScript, and React JS to enhance design and functionality."
      ]
    }
  ];

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              className="timeline-item" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-dot">
                <div className="timeline-logo-wrapper">
                  {exp.logo ? (
                    <img src={exp.logo} alt={`${exp.company} logo`} className="timeline-company-logo" onError={(e) => e.target.style.display = 'none'} />
                  ) : null}
                </div>
              </div>
              <div className="timeline-content card">
                <div className="timeline-header">
                  <h3>{exp.role}</h3>
                  <div className="timeline-date">
                    <Calendar size={14} />
                    <span>{exp.date}</span>
                  </div>
                </div>
                <div className="company-info">
                  <h4 className="text-gradient">{exp.company}</h4>
                </div>
                <ul className="timeline-desc">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
