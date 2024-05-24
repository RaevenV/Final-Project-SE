import React, { useState } from 'react'
import ReplyCard from '../replyCard/replyCard';
import "./postCard.css"

function PostCard(props) {
    const [showTextBox, setShowTextBox] = useState(false);
    
    const replyButtonClick = () => {
        setShowTextBox(!showTextBox);
    }

  return (
    <>
        <div className="postcard-container">
            <div className="postcard-wrapper">
                <div className="postcard-information">
                    <div className="postcard-profile">
                        <img src="/forum-profile.png" alt="" className='postcard-forum-profile'/>
                    </div>
                    <div className="postcard-detail-container">
                        <div className="postcard-username">{props.username}</div>
                        <div className="postcard-time">{props.time}</div>
                        <div className="postcard-thread">{props.thread}</div>
                        <div className="postcard-interaction">
                            <button className='interactionButton'><img src="/like.png" alt="" className='postcard-like'/></button>
                            <button onClick={replyButtonClick} className='interactionButton'>
                                <img src="/reply.png" alt="" className='postcard-reply'/>
                            </button>
                            <button className='interactionButton'><img src="/more.png" alt="" className='postcard-more'/></button>
                        </div>
                        {showTextBox && (
                            <div className="reply-box">
                                <input type="text" placeholder='Reply here...' className='replyinputbox'/>
                                <button className='submitReply-button' type='submit'>
                                    <img src="/send-icon.png" alt="" className='send-icon-button'/>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="replycard-container">
                    <ReplyCard username="Ferdi Karjadiputra" time="10" thread="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui."/>
                </div>   
            </div> 
        </div>
    </>
  )
}

export default PostCard;