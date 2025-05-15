import React, { useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import BasicExample from "./pages/BasicExample";
import AdvancedExample from "./pages/AdvancedExample";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("basic");

  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>React 3D Audio Visualizer</h1>
          <p className="subtitle">
            A stunning 3D audio visualizer component for React applications
          </p>

          <nav>
            <ul className="nav-links">
              <li>
                <Link
                  to="/basic"
                  className={activeTab === "basic" ? "active" : ""}
                  onClick={() => setActiveTab("basic")}
                >
                  Basic Example
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/advanced"
                  className={activeTab === "advanced" ? "active" : ""}
                  onClick={() => setActiveTab("advanced")}
                >
                  Advanced Example
                </Link>
              </li> */}
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/basic" replace />} />
            <Route path="/basic" element={<BasicExample />} />
            <Route path="/advanced" element={<AdvancedExample />} />
          </Routes>
        </main>

        <footer>
          <div className="footer-content">
            <p>© {new Date().getFullYear()} Ampcome</p>
            <p>
              <a
                href="https://github.com/Ampcome/audio-visualizer"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
