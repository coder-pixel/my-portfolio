import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const buttonBorderVariants = {
  onHover: {
    scale: 1.15,
    boxShadow: "0px 0px 8px #000",
    transition: {
      duration: 0.5,
      yoyo: Infinity,
    },
  },
};

const entryBottomVariants = {
  hidden: {
    y: "150px",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
};

const Home = ({ fadeInVariants }) => {
  return (
    <motion.div
      className="heroSection"
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div className="contentDiv">
        <div className="textDiv">
          <h2>
            Hello, <span>I'm Sauvik!</span>
          </h2>
          <p>
            Crafting modern, responsive, and user-friendly web applications is
            my passion. With expertise in React, Next.js, and TypeScript, I
            build scalable solutions tailored to user needs.
          </p>
          <p>
            Explore my work, skills, and projects to see how I bring ideas to
            life through code. Let’s create something amazing together!
          </p>
        </div>
        <div className="imgDiv">
          {/* <img src="./images/DrawKit Larry Character Illustration (5).svg" alt="" /> */}
          <img
            src="./images/DrawKit Larry Character Illustration (2).svg"
            alt=""
          />
        </div>
      </motion.div>

      <motion.div
        className="btnDiv"
        variants={entryBottomVariants}
        initial="hidden"
        animate="visible"
      >
        <Link to="/projects">
          <motion.h4
            className="links"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Projects
          </motion.h4>
        </Link>
        <Link to="/about">
          <motion.h4
            className="links"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            About Me
          </motion.h4>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Home;
