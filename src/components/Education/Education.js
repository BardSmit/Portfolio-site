import React from 'react'
import "./education.css";
import EducationCard from './EducationCard';
import { educationData } from '../../data/educationData.js';
import {ReactComponent as EduImgOrange} from '../../assets/svg/eduOrange.svg';

function Education() {
    // const educationData = [
    //     {
    //         id: 1,
    //         institution: 'Marble Hills Middle School',
    //         course: 'Higher Secondary Education',
    //         startYear: '2007',
    //         endYear: '2015'
    //     },
    //     {
    //         id: 2,
    //         institution: 'Somerset School of Science',
    //         course: 'Bachelor of Technology',
    //         startYear: '2015',
    //         endYear: '2019'
    //     },
    //     {
    //         id: 3,
    //         institution: 'Hawking University, Cambridge',
    //         course: 'Master of Technology',
    //         startYear: '2019',
    //         endYear: 'Present'
    //     },
    // ]
    console.log(educationData.length);
  return (
    <div className="education" id="resume" >
           
            <div className="education-body">
                <div className="education-description">
                <h1 className='education-heading'>Education</h1>
                    {educationData.map(edu => (
                        <EducationCard 
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                        />
                    ))}
                </div>
                <div className="education-image">
                <EduImgOrange/>
                </div>
            </div>
        </div>
  )
}

export default Education