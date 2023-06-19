import React from 'react'
import Fade from 'react-reveal/Fade';
import {ReactComponent as EduImg} from '../../assets/svg/eduImgBlack.svg'
function EducationCard({id, institution, course, startYear, endYear }) {
  return (
        <Fade bottom>
            <div id='key' className='education-card'>
                <div className="educard-img">
                    <EduImg/>
                </div>
                <div className="education-details">
                    <h6>{startYear}-{endYear}</h6>
                    <h4>{course}</h4>
                    <h5>{institution}</h5>
                </div>
            </div>
        </Fade>
  )
}

export default EducationCard