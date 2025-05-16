import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home";
import BasicExamplePage from "../pages/Basic";
import AdvancedExamplePage from "../pages/Advanced";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic" element={<BasicExamplePage />} />
        <Route path="/advanced" element={<AdvancedExamplePage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
