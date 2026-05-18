import "../styles/projectModal.css";

import { motion } from "framer-motion";

function ProjectModal({ project, closeModal }) {

  if (!project) return null;

  return (

    <div
      className="modal-overlay"
      onClick={closeModal}
    >

      <motion.div

        className="project-modal"

        initial={{
          opacity: 0,
          scale: 0.9
        }}

        animate={{
          opacity: 1,
          scale: 1
        }}

        exit={{
          opacity: 0,
          scale: 0.9
        }}

        transition={{
          duration: 0.4
        }}

        onClick={(e) =>
          e.stopPropagation()
        }
      >

        {/* CLOSE */}

        <button
          className="close-btn"
          onClick={closeModal}
        >
          ✕
        </button>

        {/* HEADER */}

        <div className="modal-header">

          <div>

            <p className="modal-category">
              {project.category}
            </p>

            <h2>
              {project.title}
            </h2>

          </div>

          <div
            className="project-indicator"
            style={{
              background: project.color
            }}
          ></div>

        </div>

        {/* DESCRIPTION */}

        <p className="modal-description">
          {project.description}
        </p>

        {/* TECH STACK */}

        <div className="modal-section">

          <h3>Tech Stack</h3>

          <div className="modal-tags">

            {project.tech.map((item, index) => (

              <span key={index}>
                {item}
              </span>

            ))}

          </div>

        </div>

        {/* MODULES */}

        <div className="modal-section">

          <h3>Core Modules</h3>

          <div className="modules-grid">

            {project.modules.map((module, index) => (

              <div
                className="module-card"
                key={index}
              >

                <div className="module-dot"></div>

                <p>{module}</p>

              </div>

            ))}

          </div>

        </div>

        {/* FEATURES */}

        <div className="modal-section">

          <h3>Key Features</h3>

          <div className="features-list">

            {project.features.map((feature, index) => (

              <div
                className="feature-item"
                key={index}
              >

                <span>✓</span>

                <p>{feature}</p>

              </div>

            ))}

          </div>

        </div>

        {/* STATS */}

        <div className="modal-section">

          <h3>Project Metrics</h3>

          <div className="modal-stats">

            {Object.entries(project.stats).map(
              ([key, value], index) => (

                <div
                  className="stat-box"
                  key={index}
                >

                  <h4>{value}</h4>

                  <p>{key}</p>

                </div>

              )
            )}

          </div>

        </div>

      </motion.div>

    </div>

  );
}

export default ProjectModal;