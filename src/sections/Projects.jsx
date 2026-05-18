import "../styles/projects.css";

import projects from "../data/projectsData";

import { motion } from "framer-motion";

import Tilt from "react-parallax-tilt";

import { useState } from "react";

import ProjectModal from "../components/ProjectModal";

function Projects() {

  const [selectedProject, setSelectedProject] =
    useState(null);

  return (

    <section className="projects-section">

      <div className="container">

        {/* HEADER */}

        <div className="projects-header">

          <p className="projects-subtitle">
            FEATURED PROJECTS
          </p>

          <h2>
            Intelligent Systems
            <br />
            Built With Creativity
          </h2>

        </div>

        {/* PROJECT GRID */}

        <div className="projects-grid">

          {projects.map((project) => (

            <Tilt
              key={project.id}

              tiltMaxAngleX={8}
              tiltMaxAngleY={8}

              glareEnable={true}

              glareMaxOpacity={0.2}

              scale={1.02}

              transitionSpeed={1500}
            >

              <motion.div

                className="project-card"

                whileHover={{
                  y: -10
                }}

                onClick={() =>
                  setSelectedProject(project)
                }
              >

                {/* GLOW */}

                <div className="card-glow"></div>

                {/* TOP */}

                <div className="project-top">

                  <div>

                    <h3>
                      {project.title}
                    </h3>

                    <p className="project-sub">
                      {project.category}
                    </p>

                  </div>

                  <div className="live-badge">
                    LIVE AI
                  </div>

                </div>

                {/* MOCKUP */}

                <div className="project-mockup">

                  <div className="mockup-screen">

                    <div className="mockup-bar"></div>

                    <div className="mockup-content">

                      <div
                        className="graph"

                        style={{
                          background:
                            `linear-gradient(
                              135deg,
                              ${project.color}55,
                              rgba(123,47,247,0.2)
                            )`
                        }}
                      ></div>

                      <div className="small-cards">

                        <span></span>
                        <span></span>
                        <span></span>

                      </div>

                    </div>

                  </div>

                </div>

                {/* SHORT DESCRIPTION */}

                <p className="project-description">

                  {project.shortDescription}

                </p>

                {/* TECH STACK */}

                <div className="tech-stack">

                  {project.tech.slice(0, 4).map(
                    (tech, index) => (

                      <span key={index}>
                        {tech}
                      </span>

                    )
                  )}

                </div>

                {/* STATS */}

                <div className="project-stats">

                  {Object.entries(project.stats)
                    .slice(0, 3)
                    .map(([key, value], index) => (

                      <div key={index}>

                        <h4>
                          {value}
                        </h4>

                        <p>
                          {key}
                        </p>

                      </div>

                    ))}

                </div>

                {/* BUTTON */}

                <div className="project-buttons">

                  <button className="primary-btn">

                    Explore Project

                  </button>

                </div>

              </motion.div>

            </Tilt>

          ))}

        </div>

      </div>

      {/* PROJECT MODAL */}

      <ProjectModal

        project={selectedProject}

        closeModal={() =>
          setSelectedProject(null)
        }

      />

    </section>

  );
}

export default Projects;