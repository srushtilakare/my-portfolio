import "../styles/experience.css";

function ExperienceSection() {

  const learnProjects = [
    "Deepfake Detection",
    "Lung Cancer Detection",
    "Pothole Detection",
    "Abusive Language Detection",
    "AI Flask Applications",
    "Cardiovascular Disease Detection"
  ];

  const infosysTech = [
    "MERN Stack",
    "MongoDB",
    "React.js",
    "Node.js",
    "REST APIs",
    "GitHub"
  ];

  return (

    <section className="experience-section">

      {/* HEADER */}

      <div className="experience-header">

        <p className="experience-tag">
          EXPERIENCE • INDUSTRY • LEADERSHIP
        </p>

        <h2>
          Work Experience
        </h2>

        <p className="experience-subtitle">

          Real-world industry experience in
          Artificial Intelligence, Machine Learning,
          Full Stack Development, and Research Work.

        </p>

      </div>

      {/* TIMELINE */}

      <div className="timeline">

        {/* EXPERIENCE 1 */}

        <div className="experience-card">

          <div className="timeline-dot"></div>

          <div className="experience-content">

            <div className="experience-top">

              <div>

                <h3>
                  Learnalytics Tech Academy Pvt. Ltd.
                </h3>

                <span>
                  Data Science Intern
                </span>

              </div>

              <p className="experience-date">
                Jan 2026 – May 2026
              </p>

            </div>

            <p className="experience-description">

              Worked on real-world AI projects involving
              Machine Learning, Deep Learning,
              Computer Vision, NLP, dataset analysis,
              Flask-based systems, and research-oriented tasks.

            </p>

            {/* PROJECTS */}

            <div className="experience-block">

              <h4>
                Key Projects
              </h4>

              <div className="tags">

                {

                  learnProjects.map((item, index) => (

                    <span key={index}>
                      {item}
                    </span>

                  ))

                }

              </div>

            </div>

            {/* TECH */}

            <div className="experience-block">

              <h4>
                Technologies Used
              </h4>

              <div className="tags">

                <span>Python</span>
                <span>TensorFlow</span>
                <span>YOLO</span>
                <span>Flask</span>
                <span>NLP</span>
                <span>React</span>
                <span>Pandas</span>
                <span>Scikit-learn</span>

              </div>

            </div>

          </div>

        </div>

        {/* EXPERIENCE 2 */}

        <div className="experience-card">

          <div className="timeline-dot purple"></div>

          <div className="experience-content">

            <div className="experience-top">

              <div>

                <h3>
                  Infosys Springboard
                </h3>

                <span>
                  Full Stack Developer Trainee • Team Leader
                </span>

              </div>

              <p className="experience-date">
                Aug 2025 – Oct 2025
              </p>

            </div>

            <p className="experience-description">

              Worked as Backend Team Member and Team Leader
              during the Infosys virtual internship program.
              Led backend coordination and collaborated
              with team members to develop CampusEvent Hub.

            </p>

            {/* LEADERSHIP */}

            <div className="experience-highlight">

              <div className="highlight-card">

                <h4>
                  Leadership Experience
                </h4>

                <p>

                  Managed backend tasks,
                  team coordination,
                  API planning,
                  and development flow.

                </p>

              </div>

              <div className="highlight-card">

                <h4>
                  Team Contribution
                </h4>

                <p>

                  Developed backend modules,
                  database flow,
                  API integration,
                  and GitHub collaboration.

                </p>

              </div>

            </div>

            {/* TECH */}

            <div className="experience-block">

              <h4>
                Tech Stack
              </h4>

              <div className="tags">

                {

                  infosysTech.map((tech, index) => (

                    <span key={index}>
                      {tech}
                    </span>

                  ))

                }

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default ExperienceSection;