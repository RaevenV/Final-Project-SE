import React from 'react'
import { ProgressBar } from 'react-bootstrap';
import "./ContinueLastCourseCard.css"

function ContinueLastCourseCard(props) {
  return (
    <>
        <div className="continuelastcourse-card-container">
            <div className="continuelastcourse-card-image-container">
                <img className="continuelastcourse-card-image" src={props.imgModule} alt="" />
            </div>
            <div className="continuelastcourse-card-description-container">
                <div className="continuelastcourse-card-detail-description">
                    <h1 className='continuelastcourse-card-title'>{props.title}</h1>
                    <h3 className='continuelastcourse-card-description'>{props.description}</h3>
                </div>
                <div className="continuelastcourse-card-progression-bar">
                    <div className="progress-bar-container">
                        <ProgressBar now={props.progress} />
                    </div>
                    <div>{props.progress}%</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContinueLastCourseCard