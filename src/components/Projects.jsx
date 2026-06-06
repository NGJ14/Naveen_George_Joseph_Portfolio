import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Comet Keyboard Extension",
      category: "Mecha Systems Internship",
      description: "Designed a QMK-compatible RGB backlit keyboard extension for the Comet device. Features include a standard QWERTY layout with swappable 3D-printable keys, an integrated high-definition trackpad for seamless cursor control, and programmable action buttons tailored for custom macros.",
      image: "/images/keyboard1.png",
      hoverImage: "/images/keyboard2.png",
      tags: ["Mechanical Design", "Ergonomics", "QMK"]
    },
    {
      title: "Comet Gamepad Extension",
      category: "Mecha Systems Internship",
      description: "Developed a versatile gamepad extension featuring a dual D-pad design, with one D-pad embedding a trackpad for dual-purpose directional control and cursor navigation. Included programmable ABXY, home, start, and select buttons optimized for ergonomic and extended gaming sessions.",
      image: "/images/gamepad1.png",
      hoverImage: "/images/gamepad2.png",
      tags: ["Product Design", "Tactile Feedback", "Gaming"]
    },
    {
      title: "Comet GPIO Extension",
      category: "Mecha Systems Internship",
      description: "Created a GPIO expansion module aimed at developers and hardware hobbyists. It features SerialConsole via USB, built-in CAN Bus communication, and a custom snap-fit rear hatch mechanism for secure yet accessible access to internal IO pins and PCBs.",
      image: "/images/gpio1.png",
      hoverImage: "/images/gpio2.png",
      tags: ["Hardware Enclosures", "DFM", "DFA"]
    },
    {
      title: "Active Suspension System for Tracked Robotics",
      category: "Final Year Project",
      description: "Developed a prototype for an adaptive tracked suspension system using an actuated four-bar mechanism. The system dynamically adjusts ground clearance, wheelbase, and center of gravity to enhance climbing capability and terrain adaptability, featuring differential steering and an articulated chassis.",
      image: "/images/finalproj1.png",
      hoverImage: "/images/finalproj2.png",
      tags: ["Robotics", "Kinematics", "Simulations"]
    },
    {
      title: "Suspension System For Continuous Tracked Vehicles",
      category: "Patent (202641007498 A) • Co-Inventor",
      description: "A novel suspension system for continuous tracked vehicles featuring an actuated linkage that dynamically adjusts vehicle geometry (ground clearance and wheelbase) while maintaining track engagement—eliminating the need for a separate track-tensioning mechanism and enabling adaptable mobility across varying terrains.",
      image: "/images/susp1.png",
      hoverImage: "/images/susp2.png",
      tags: ["Filed Feb 2026", "Mechanical Design", "Suspension Systems"]
    },
    {
      title: "Bio-Inspired End of Arm Tooling (EOAT)",
      category: "Patent (202541094616 A) • Co-Inventor",
      description: "This invention introduces a bio-inspired robotic end effector designed to securely and adaptively grip fragile or irregularly shaped objects. Using custom TPU lattice jaws, a worm-gear mechanism, and an integrated pressure sensor, the EOAT ensures reliable gripping, high back-drive resistance, and intelligent feedback-based manipulation.",
      image: "/images/eoat1.png",
      hoverImage: "/images/eoat2.png",
      tags: ["Filed Oct 2025", "Robotics", "Mechanisms"]
    },
    {
      title: "Depth Camera Mount with Thermal Management",
      category: "Patent (202541094615 A) • Co-Inventor",
      description: "This patent presents a specialized mount that improves the thermal stability, optical performance, and calibration accuracy of depth-sensing cameras in challenging environments. Featuring a passive optical shielding + active cooling enclosure, sun-shielding, and precision alignment elements, the mount is optimized for harsh outdoor conditions.",
      image: "/images/depth_cam1.png",
      tags: ["Filed Oct 2025", "Thermal Dynamics", "Hardware Design"]
    },
    {
      title: "Exoskeleton Humanoid Robot",
      category: "Vortex 360 Designathon (2025)",
      description: "1st Position for transforming an exoskeleton into a humanoid robot design, balancing structural integrity with maneuverability.",
      image: "/images/exoskeleton1.png",
      hoverImage: "/images/exoskeleton2.png",
      tags: ["Humanoid", "Biomechanics", "3D Printing"]
    },
    {
      title: "3D-Printed Lattice Structure Wheels",
      category: "Innovation Week (2025)",
      description: "Secured 2nd Position by designing and manufacturing 3D-printed wheels with lattice structures for optimized weight-to-strength ratio.",
      image: "/images/lattice_wheel1.png",
      hoverImage: "/images/lattice_wheel2.png",
      tags: ["Additive Manufacturing", "Lattice Structures"]
    }
  ];

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects, Patents & Innovations
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              className="project-card card" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} className={project.hoverImage ? "main-image" : ""} />
                {project.hoverImage && (
                  <img src={project.hoverImage} alt={`${project.title} inner details`} className="hover-image" />
                )}
                <div className="project-overlay">
                  <a href="#" className="overlay-btn"><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <div className="project-content">
                <p className="project-category text-gradient">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
