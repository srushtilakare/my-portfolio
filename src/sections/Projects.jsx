import "../styles/projects.css";

import projects from "../data/projectsData";

import { motion } from "framer-motion";

import Tilt from "react-parallax-tilt";

function Projects() {

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
                      {project.subtitle}
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

                      <div className="graph"></div>

                      <div className="small-cards">

                        <span></span>
                        <span></span>
                        <span></span>

                      </div>

                    </div>

                  </div>

                </div>

                {/* DESCRIPTION */}

                <p className="project-description">
                  {project.description}
                </p>

                {/* TECH STACK */}

                <div className="tech-stack">

                  {project.tech.map((tech, index) => (

                    <span key={index}>
                      {tech}
                    </span>

                  ))}

                </div>

                {/* STATS */}

                <div className="project-stats">

                  <div>
                    <h4>
                      {project.stats.accuracy}
                    </h4>

                    <p>Accuracy</p>
                  </div>

                  <div>
                    <h4>
                      {project.stats.speed}
                    </h4>

                    <p>Speed</p>
                  </div>

                  <div>
                    <h4>
                      {project.stats.users}
                    </h4>

                    <p>Users</p>
                  </div>

                </div>

                {/* BUTTONS */}

                <div className="project-buttons">

                  <button className="primary-btn">
                    View Project
                  </button>

                  <button className="secondary-btn">
                    GitHub
                  </button>

                </div>

              </motion.div>

            </Tilt>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Projects;