import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import HomeNavbar from '../../Universal Components/navbars/homeNavbar';
import Footer from '../../Universal Components/footer';
import ReplyCard from '../replyCard/replyCard';
import "./forumPreviewPage.css";
import "../postCard/postCard.css";

function ForumPreviewPage() {
  
  const [showTextBox, setShowTextBox] = useState(false);
  const replyButtonClick = () => {
      setShowTextBox(!showTextBox);
  }
  
  const { searchParam } = useParams();
  const [result, setResult] = useState([]);

  useEffect(() => {
    const findData = async () => {
      let findQuery = "";

      if (searchParam) {
        findQuery = query(
          collection(db, "forum"), 
          where("forumTitle", ">=", searchParam),
          where("forumTitle", "<=", searchParam + "\uf8ff")
        );
      } 

      try {
        const foundDB = await getDocs(findQuery);
        let forums = [];

        for (const doc of foundDB.docs) {
          const data = doc.data();
          const forumPostRef = collection(doc.ref, "forumPost");
          const forumPost = await getDocs(forumPostRef);

          let forumPosts = [];

          for (const forumPostDoc of forumPost.docs) {
            const post = forumPostDoc.data();

            const forumPostReplyRef = collection(forumPostDoc.ref, "replies");
            const forumPostReply = await getDocs(forumPostReplyRef);

            let forumReplies = [];

            for (const forumReplyDoc of forumPostReply.docs) {
              const reply = forumReplyDoc.data();

              forumReplies.push({
                content: reply.replyContent,
                createdAt: reply.replyCreatedAt,
                likeCount: reply.replyLikeCount,
                sender: reply.replySender,
                uid: reply.replyUid,
              });
            }

            forumPosts.push({
              createdAt: post.createdAt,
              likeCount: post.likeCount,
              postContent: post.postContent,
              sender: post.sender,
              uid: post.uid,
              replies: forumReplies,
            });
          }

          forums.push({
            id: doc.id,
            category: data.forumCategory,
            img: data.forumImage,
            member: data.forumMember,
            title: data.forumTitle,
            posts: forumPosts,
          });
        }

        setResult(forums);
      } catch (error) {
        console.error("Error fetching data:", error);
        setResult([]);
      }
    };

    findData();
  }, [searchParam]);

  return (
    <>
      <HomeNavbar />
      <div className="forumpreview-container">
        {result.map((forum, forumIndex) => (
          <div key={forumIndex}>
            {forum.posts.map((post, postIndex) => (
              <div className="postcard-container" key={postIndex}>
                <div className="postcard-title">{forum.title}</div>
                <div className="postcard-wrapper">
                  <div className="postcard-information">
                    <div className="postcard-profile">
                      <img src="/forum-profile.png" alt="" className='postcard-forum-profile'/>
                    </div>
                    <div className="postcard-detail-container">
                      <div className="postcard-username">{post.sender}</div>
                      <div className="postcard-time">{post.createdAt}</div>
                      <div className="postcard-thread">{post.postContent}</div>
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
                    {post.replies.map((reply, replyIndex) => (
                      <ReplyCard
                        key={replyIndex}
                        username={reply.sender}
                        time={reply.createdAt}
                        thread={reply.content}
                      />
                    ))}
                  </div>   
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default ForumPreviewPage;
