import "./App.css";

function App() {
  return (
    <div className="scene">
      <div className="card">
        {/* FRONT */}

        <div className="front">
          <div className="photo">
            <img src="/vivek.jpg" />
          </div>

          <div className="details">
            <h1>
              VIVEK <span>GARG</span>
            </h1>

            <h3>B.Tech CSE Student</h3>

            <p>📱 +91 98765 43210</p>
            <p>✉️ vivekgarg0605@gmail.com</p>
            <p>💻 github.com/VivekCoderz</p>
            <p>🔗 linkedin.com/in/-vivek-garg</p>
          </div>
        </div>

        {/* BACK */}

        <div className="back">
          <h1>
            B.TECH <span>CSE</span>
          </h1>

          <h3>STUDENT</h3>

          <p className="quote">
            Learning Today,
            <br />
            Building Tomorrow
          </p>

          <div className="skills">
            <div>C++</div>
            <div>DSA</div>
            <div>React</div>
            <div>Python</div>
            <div>SQL</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
