import React from 'react'
import "./about.css";
import {ReactComponent as SideImg} from '../../assets/svg/side-img.svg';

function About() {
  return (
    <div className='about' id='about'>
        <div className='line-styling'>
            <div className="style-circle" ></div>
            <div className="style-circle" ></div>
            <div className="style-line"></div>
        </div>
        <div className='about-body'>
            <div className='about-description'>
            <h2 className='who'>Who I am</h2>
            <p className='who-desc'>My name's Jane. I'm a web designer and developer based in Southampton, 
            UK.<br></br>During the day I work as a lead developer at a local agency and in the evening <br></br>
             I  work on freelance projects and utilize the time to built my own products.<br></br>
             I spent my leisure hours writing articles and poetry. <br></br>Right now I'm also trying a hand at machine learning and AI. I love to learn and explore new arenas.</p>
            </div>
            <div className='about-img'>
                <SideImg/>
            </div>
        </div>
    </div>
  )
}

export default About