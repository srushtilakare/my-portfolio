import "../styles/skills.css";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt
} from "react-icons/fa";

import {
  SiMongodb,
  SiTensorflow,
  SiFlask,
  SiFastapi
} from "react-icons/si";

function Skills() {

  const orbit1 = [
    "React",
    "Node.js",
    "Python",
    "MongoDB",
    "Machine Learning"
  ];

  const orbit2 = [
    "Flask",
    "FastAPI",
    "Git & GitHub",
    "C",
    "C++"
  ];

  const orbit3 = [
    "MySQL",
    "Problem Solving",
    "Leadership",
    "Creativity",
    "Teamwork"
  ];

  const icons = {

    "React": <FaReact />,
    "Node.js": <FaNodeJs />,
    "Python": <FaPython />,
    "MongoDB": <SiMongodb />,
    "Machine Learning": <SiTensorflow />,
    "Flask": <SiFlask />,
    "FastAPI": <SiFastapi />,
    "Git & GitHub": <FaGitAlt />,

    "C": "💻",
    "C++": "⚡",
    "MySQL": "🛢️",

    "Problem Solving": "🧠",
    "Leadership": "🎯",
    "Creativity": "💡",
    "Teamwork": "🤝"

  };

  return (

    <section className="skills-page">

      <div className="skills-header">

        <p className="skills-subtitle">
          SKILLS UNIVERSE
        </p>

        <h1>
          Technologies &
          <br />
          Creative Capabilities
        </h1>

      </div>

      <div className="skills-galaxy">

        {/* CENTER */}

        <div className="center-ai">

          <div className="center-glow"></div>

          <h2>AI</h2>

        </div>

        {/* ORBIT 1 */}

        <div className="orbit orbit-one">

          {orbit1.map((skill, index) => {

            const angle = (360 / orbit1.length) * index;

            return (

              <div
                className="orbit-item"
                key={index}
                style={{
                  transform:
                    `rotate(${angle}deg) translate(200px) rotate(-${angle}deg)`
                }}
              >

                <div className="skill-card">

                  <div className="skill-icon">
                    {icons[skill]}
                  </div>

                  <p>{skill}</p>

                </div>

              </div>

            );

          })}

        </div>

        {/* ORBIT 2 */}

        <div className="orbit orbit-two">

          {orbit2.map((skill, index) => {

            const angle = (360 / orbit2.length) * index;

            return (

              <div
                className="orbit-item"
                key={index}
                style={{
                  transform:
                    `rotate(${angle}deg) translate(350px) rotate(-${angle}deg)`
                }}
              >

                <div className="skill-card">

                  <div className="skill-icon">
                    {icons[skill]}
                  </div>

                  <p>{skill}</p>

                </div>

              </div>

            );

          })}

        </div>

        {/* ORBIT 3 */}

        <div className="orbit orbit-three">

          {orbit3.map((skill, index) => {

            const angle = (360 / orbit3.length) * index;

            return (

              <div
                className="orbit-item"
                key={index}
                style={{
                  transform:
                    `rotate(${angle}deg) translate(500px) rotate(-${angle}deg)`
                }}
              >

                <div className="skill-card">

                  <div className="skill-icon">
                    {icons[skill]}
                  </div>

                  <p>{skill}</p>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );
}

export default Skills;