import "../styles/terminal.css";

import { TypeAnimation } from "react-type-animation";

function Terminal() {

  return (

    <section className="terminal-section">

      <div className="container">

        <div className="terminal-header">

          <p className="terminal-subtitle">
            AI ASSISTANT
          </p>

          <h2>
            Interactive AI Terminal
          </h2>

        </div>

        <div className="terminal-window">

          {/* TOP BAR */}

          <div className="terminal-topbar">

            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>

          </div>

          {/* TERMINAL CONTENT */}

          <div className="terminal-body">

            <p>
              <span className="prompt">
                visitor@srushtiAI:~$
              </span>

              help
            </p>

            <div className="terminal-output">

              <TypeAnimation
                sequence={[
                  `
Available Commands:

> show projects
> open FarmAI
> view skills
> research work
> contact
> resume
                  `,
                  2000,
                ]}
                speed={70}
                repeat={Infinity}
                style={{
                  whiteSpace: "pre-line",
                  display: "block"
                }}
              />

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Terminal;