import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const Header: React.FC<{}> = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // const toggleMenu = (): void => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  // Debounced scroll handler to improve performance
  const handleScroll = useCallback((): void => {
    // Using requestAnimationFrame for smoother animation
    window.requestAnimationFrame(() => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  useEffect(() => {
    // Add passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container h-20 mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src="../assets/favicon.ico"
            alt="Audio Visualizer Logo"
            className="h-8 w-auto object-contain"
          />
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-fuchsia-500">
            Audio Visualizer
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link
            to="/basic"
            className="text-white/80 hover:text-white font-medium transition-colors hover:scale-105 transform duration-200"
          >
            Basic Example
          </Link>
          <Link
            to="/advanced"
            className="text-white/80 hover:text-white font-medium transition-colors hover:scale-105 transform duration-200"
          >
            Advanced Example
          </Link>
          <a
            href="https://github.com/ampcome/audio-visualizer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full transition-all duration-300"
          >
            <svg
              className="h-5 w-5"
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
            <span>GitHub</span>
          </a>
        </nav>
        {/* <button className="md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button> */}
      </div>
    </header>
  );
};

export default Header;
