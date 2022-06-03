import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Header from './Components/Header';
import Home from './Components/Home';
import Projects from './Components/Projects';
import { AnimatePresence, motion } from "framer-motion";
import Particle from './Components/Particle';

const fadeInVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: .5,
      ease: "easeInOut"
    }
  },
  exit: {
    y: "100vh",
    transition: { ease: "easeInOut" }
  }
}

function App() {
  const [currColor, setCurrColor] = useState("#000")

  const location = useLocation()
  const path = location.pathname

  const changeCssVar = () => {
    // Get the root element
    var root = document.querySelector(":root");
    // console.log(root)

    // Get the styles (properties and values) for the root
    var cssVar = getComputedStyle(root)
    // console.log(cssVar)

    var powerIconPath = document.querySelector(".powerIcon svg path")
    var githubIconPath = document.querySelector(".github svg path")
    var linkedinIconPath = document.querySelector(".linkedin svg path")
    var mailIconPath = document.querySelector(".mail svg path")

    if (path == "/projects") {
      // Set the value of variable --blue to another value (in this case "lightblue")
      root.style.setProperty('--main-text-color', '#fcf6f4');
      root.style.setProperty('--main-background-color', '#000');

      // console.log(powerIconPath)
      powerIconPath.setAttribute("fill", "#32cd32");
      githubIconPath.setAttribute("fill", "#fcf6f4");
      linkedinIconPath.setAttribute("fill", "#fcf6f4");
      mailIconPath.setAttribute("fill", "#fcf6f4");
    
      setCurrColor("#fcf6f4")
    }
    else {
      root.style.setProperty('--main-text-color', '#000');
      root.style.setProperty('--main-background-color', '#fcf6f4');

      powerIconPath.setAttribute("fill", "#000");
      githubIconPath.setAttribute("fill", "#000");
      linkedinIconPath.setAttribute("fill", "#000");
      mailIconPath.setAttribute("fill", "#000");

      // document.querySelector(".socialLinks").style.top = "-5%";
    
      setCurrColor("#000")
    }
  }

  useEffect(() => {
    changeCssVar()
  }, [path])



  return (
    <motion.div className="portfolio_container">
      <Header />
      <Particle currColor={currColor} />
      <AnimatePresence
        exitBeforeEnter
      >
        <Routes location={location} key={location.key} >
          <Route exact path='/' element={<Home fadeInVariants={fadeInVariants} />} />
          <Route path='/projects' element={<Projects fadeInVariants={fadeInVariants} />} />
          <Route path='/about' element={<About fadeInVariants={fadeInVariants} />} />
          {/* <Route path='/myskills' element={<MySkills />} /> */}
        </Routes>
      </AnimatePresence>
    </motion.div>
  );
}

export default App;
