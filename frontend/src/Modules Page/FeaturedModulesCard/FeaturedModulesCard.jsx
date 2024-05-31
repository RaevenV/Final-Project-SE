import React from 'react'
import EnrollButton from "../../Universal Components/Enroll Button/enrollButton"
import "./FeaturedModulesCard.css"

function FeaturedModulesCard(props) {
  return (
    <>
        <div className="featuredmodules-cart-container">
            <div className="featuredmodules-cart-wrapper">
                <img src={props.imgModule} alt="" className='featuredmodules-picture'/>
                <div className="featuredmodules-description-container">
                    <div className="featuredmoodules-description-wrapper">
                        <div className="featuredmodules-detail-title">{props.featuredmodulesTitle}</div>
                        <div className="featuredmodules-detail-description">{props.featuredmodulesDescription}</div>
                    </div>
                    <div className="featuredmodules-mentor-container">
                        <div className='mentorImg-container'>
                            <img src={props.imgMentor} alt="" className='featuredmodules-mentor-img'/>
                        </div>
                        <div className="featuredmodules-mentor-description-wrapper">
                            <div className="featuredmodules-mentor-name">{props.mentorName}</div>
                            <div className="featuredmodules-mentor-position">{props.mentorPosition}</div>
                            <img src="/rating-star.png" alt="" className='featuredmodules-star' />
                        </div>
                    </div>
                    <div className='featuredmodules-enroll-button'>
                        <EnrollButton text="Enroll" link={props.link}/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FeaturedModulesCard