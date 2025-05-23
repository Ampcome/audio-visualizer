import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC<{}> = () => {
  return (
    <footer className="relative bg-black text-gray-400 pt-16 pb-10">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 pb-10 border-b border-gray-800">
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img
                src="../assets/favicon.ico"
                alt="Audio Visualizer Logo"
                className="h-8 w-auto"
              />
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-fuchsia-500">
                Audio Visualizer
              </span>
            </Link>
            <p className="text-gray-500 max-w-md">
              A powerful 3D audio visualization component for React
              applications, bringing your audio to life with stunning visual
              effects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/basic"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Basic Example
                  </Link>
                </li>
                <li>
                  <Link
                    to="/advanced"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Advanced Example
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/ampcome/audio-visualizer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>GitHub Repository</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ampcome.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Ampcome Website
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Audio Visualizer. All rights reserved.
          </p>
          <p className="text-sm">
            This package is inspired by{" "}
            <a
              href="https://github.com/WaelYasmina/audiovisualizer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors font-medium"
            >
              audiovisualizer
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
