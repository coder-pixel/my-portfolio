import React from 'react'
import { Link } from 'react-router-dom'
import "./About.css"
import { motion } from 'framer-motion'

const About = ({ fadeInVariants }) => {
  return (
    <motion.div className='aboutme'
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="aboutme_content">
        <div className='content_heading'>
          <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-j</title><path d="M258.9,48C141.92,46.42,46.42,141.92,48,258.9,49.56,371.09,140.91,462.44,253.1,464c117,1.6,212.48-93.9,210.88-210.88C462.44,140.91,371.09,49.56,258.9,48ZM385.32,375.25a4,4,0,0,1-6.14-.32,124.27,124.27,0,0,0-32.35-29.59C321.37,329,289.11,320,256,320s-65.37,9-90.83,25.34a124.24,124.24,0,0,0-32.35,29.58,4,4,0,0,1-6.14.32A175.32,175.32,0,0,1,80,259C78.37,161.69,158.22,80.24,255.57,80S432,158.81,432,256A175.32,175.32,0,0,1,385.32,375.25Z" /><path d="M256,144c-19.72,0-37.55,7.39-50.22,20.82s-19,32-17.57,51.93C191.11,256,221.52,288,256,288s64.83-32,67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39,151.44,275.59,144,256,144Z" /></svg>
          About Me
        </div>
        <p>
          I'm interested in the whole frontend stack like trying new things and building great projects.
        </p>
        <p>
          I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
        </p>
        <div className="linksGrp">
          <Link to="/projects" className='bold_subheading'>
            My work
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15,10 L15,14 C15,15.1045695 14.1045695,16 13,16 L2,16 C0.8954305,16 0,15.1045695 0,14 L0,3 C0,1.8954305 0.8954305,1 2,1 L6,1 L6,3 L2,3 L2,14 L13,14 L13,10 L15,10 Z M13.9971001,3.41421356 L7.70420685,9.70710678 L6.28999329,8.29289322 L12.5828865,2 L8.99710007,2 L8.99710007,0 L15.9971001,0 L15.9971001,7 L13.9971001,7 L13.9971001,3.41421356 Z" />
            </svg>
          </Link>
          {/* old link: https://drive.google.com/uc?export=download&id=1LJgu9TZyMIDbnuRQMjD99SmLExzxhe16 */}
          <a href='https://drive.google.com/uc?export=download&id=1sWIz7ddZEakOOwa1JgnQVxnig7Xr6TyC' className='downloadLink bold_subheading'>
            Resume
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 15 4 L 15 20.5625 L 9.71875 15.28125 L 8.28125 16.71875 L 15.28125 23.71875 L 16 24.40625 L 16.71875 23.71875 L 23.71875 16.71875 L 22.28125 15.28125 L 17 20.5625 L 17 4 Z M 7 26 L 7 28 L 25 28 L 25 26 Z" /></svg>
          </a>
        </div>
      </div>


      <div className="aboutme_content skills_content">
        <div className='content_heading'>
          <svg aria-hidden="true" data-prefix="fas" data-icon="laptop-code" class="prefix__svg-inline--fa prefix__fa-laptop-code prefix__fa-w-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="40" height="40"><path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg>
          Frontend Developer
        </div>
        <p>
          I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
        </p>
        <div className="subContent">
          <h2 className='bold_subheading'>Skills</h2>
          <p>Javascript, React, Redux, Next Js, HTML5/CSS3, Bootstrap, SQL, Express/Mongo DB (basics)</p>
        </div>
        <div className="subContent">
          <h2 className='bold_subheading'>Tools</h2>
          <p>Github, Heroku, Netlify, VScode, Vercel etc.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default About