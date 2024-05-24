import React from 'react'
import { useState } from 'react';
import "./replyCard.css"

function ReplyCard(props) {

    const [showTextBox, setShowTextBox] = useState(false);
    
    const replyButtonClick = () => {
        setShowTextBox(!showTextBox);
    }

    return (
    <>
        <div className="reply-postcard-container">
            <div className="reply-postcard-wrapper">
                <div className="reply-postcard-information">
                    <div className="reply-postcard-profile">
                        <img src="/forum-profile.png" alt="" className='reply-postcard-forum-profile'/>
                    </div>
                    <div className="reply-postcard-detail-container">
                        <div className="reply-postcard-username">{props.username}</div>
                        <div className="reply-postcard-time">{props.time}</div>
                        <div className="reply-postcard-thread">{props.thread}</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ReplyCard;