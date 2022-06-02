import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div className="heroSection">

            <div className="contentDiv">
                <div className="textDiv">
                    <h2>Hello, <span>I'm Sauvik!</span></h2>

                    {/* <p>I'm a self-taught Front-end Web Developer and an aspiring fullstack dev.</p> */}
                    {/* <p>I build interactive websites that run across platforms & devices.</p> */}
                    <p>
                        I love to create simple yet beautiful websites.
                    </p>

                </div>
                <div className="imgDiv">
                    {/* <img src="./images/DrawKit Larry Character Illustration (5).svg" alt="" /> */}
                    <img src="./images/DrawKit Larry Character Illustration (2).svg" alt="" />
                </div>
            </div>

            <div className="btnDiv">
                <Link to="/projects">
                    <h4 className="links">Projects</h4>
                </Link>
                <Link to="/about">
                    <h4 className="links">About Me</h4>
                </Link>
            </div>
        </div>
    )
}

export default Home