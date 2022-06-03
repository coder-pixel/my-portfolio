import React from 'react'
import "./Projects.css"
import { projectDetails } from '../projectDetails'
import { motion } from 'framer-motion'


const Item = {
  hidden: {
    scale: 0
  },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      duration: .6,
      ease: "easeInOut"
    }
  }
}

const Projects = ({ fadeInVariants }) => {
  return (
    <motion.div className='projectsDiv'
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <span>Projects</span>
      {projectDetails.map(project => {
        const { id, title, description, github_link, hosted_link } = project;

        return (
          <motion.div className="project" key={id}
            variants={Item}
            initial="hidden"
            animate="visible"
          >
            <h3>{title}</h3>
            <p>{description}</p>
            {/* <button className="link githubLink"></button> */}
            <div>
              <span></span>
              <div className="projects_btnGrp">
                <a href={github_link} target="_blank">
                  Github
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15,10 L15,14 C15,15.1045695 14.1045695,16 13,16 L2,16 C0.8954305,16 0,15.1045695 0,14 L0,3 C0,1.8954305 0.8954305,1 2,1 L6,1 L6,3 L2,3 L2,14 L13,14 L13,10 L15,10 Z M13.9971001,3.41421356 L7.70420685,9.70710678 L6.28999329,8.29289322 L12.5828865,2 L8.99710007,2 L8.99710007,0 L15.9971001,0 L15.9971001,7 L13.9971001,7 L13.9971001,3.41421356 Z" />
                  </svg>
                </a>

                <a href={hosted_link} target="_blank">
                  Visit
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15,10 L15,14 C15,15.1045695 14.1045695,16 13,16 L2,16 C0.8954305,16 0,15.1045695 0,14 L0,3 C0,1.8954305 0.8954305,1 2,1 L6,1 L6,3 L2,3 L2,14 L13,14 L13,10 L15,10 Z M13.9971001,3.41421356 L7.70420685,9.70710678 L6.28999329,8.29289322 L12.5828865,2 L8.99710007,2 L8.99710007,0 L15.9971001,0 L15.9971001,7 L13.9971001,7 L13.9971001,3.41421356 Z" />
                  </svg>
                </a>
              </div>
            </div>

          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default Projects