import React, { useState } from 'react';
import { db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import './replyCard.css';

function ReplyCard(props) {
  const [showTextBox, setShowTextBox] = useState(false);
  const [replyText, setReplyText] = useState("");

  const replyButtonClick = () => {
    setShowTextBox(!showTextBox);
  };

  const handleReplyChange = (event) => {
    setReplyText(event.target.value);
  };

  const handleSendClick = async () => {
    if (replyText.trim() === "") return;

    const replyData = {
      replyContent: replyText,
      replyCreatedAt: new Date().toLocaleString(),
      replyLikeCount: 0,
      replySender: props.username,
      replyUid: "", // Add user ID if available
    };

    try {
      await addDoc(collection(db, `forum/forum1/forumPost/post1/replies`), replyData);
      props.onNewReply(replyData); // Notify parent about the new reply
      setReplyText("");
      setShowTextBox(false);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <>
      <div className="reply-postcard-container">
        <div className="reply-postcard-wrapper">
          <div className="reply-postcard-information">
            <div className="reply-postcard-profile">
              <img src="/forum-profile.png" alt="" className='reply-postcard-forum-profile' />
            </div>
            <div className="reply-postcard-detail-container">
              <div className="reply-postcard-username">{props.username}</div>
              <div className="reply-postcard-time">{props.time}</div>
              <div className="reply-postcard-thread">{props.thread}</div>
            </div>
          </div>
        </div>
        {showTextBox && (
          <div className="reply-textbox-container">
            <textarea
              value={replyText}
              onChange={handleReplyChange}
              placeholder="Write your reply here..."
            />
            <button onClick={handleSendClick}>Send</button>
          </div>
        )}
      </div>
    </>
  );
}

export default ReplyCard;
