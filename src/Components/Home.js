import React from 'react'

const Home = () => {
    return (
        <div className="heroSection">
            <div className="contentDiv">
                <div className="textDiv">
                    <h2>Hello, <span>I'm Sauvik!</span></h2>

                    <div>
                        <p>I'm a self-taught Front-end Web Developer and an aspiring fullstack dev.</p>
                        <p>I build interactive websites that run across platforms & devices.</p>
                    </div>
                </div>
                <div className="imgDiv">
                    {/* <img src="./images/DrawKit Larry Character Illustration (5).svg" alt="" /> */}
                    <img src="./images/DrawKit Larry Character Illustration (2).svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home