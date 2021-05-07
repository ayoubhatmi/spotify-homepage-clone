import "./App.css";
import Navbar from "./components/Navbar";

import HeroSection from "./components/HeroSection";
import PlanSection from "./components/PlanSection";
import FooterSection from "./components/FooterSection";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <PlanSection />
        <FooterSection />
      </>
    </Router>
  );
}

export default App;
