import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from "../../firebase";
import { collection, query, where, getDocs, addDoc, Timestamp } from "firebase/firestore";
import HomeNavbar from '../../Universal Components/navbars/homeNavbar';
import Footer from '../../Universal Components/footer';
import ReplyCard from '../replyCard/replyCard';
import "./forumPreviewPage.css";
import "../postCard/postCard.css";

function ForumPreviewPage() {
  const [showTextBox, setShowTextBox] = useState(false);
  const [replyInput, setReplyInput] = useState("");
  const [selectedPostId, setSelectedPostId] = useState(null); 

  const replyButtonClick = (postId) => {
    setShowTextBox(!showTextBox);
    setSelectedPostId(postId); 
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
                createdAt: reply.replyCreatedAt instanceof Timestamp ? reply.replyCreatedAt.toDate().toLocaleString() : reply.replyCreatedAt,
                likeCount: reply.replyLikeCount,
                sender: reply.replySender,
                uid: reply.replyUid,
              });
            }

            forumPosts.push({
              id: forumPostDoc.id,
              createdAt: post.createdAt instanceof Timestamp ? post.createdAt.toDate().toLocaleString() : post.createdAt,
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

  const handleReplySubmit = async () => {
    if (replyInput.trim() === "" || !selectedPostId) return; 

    const newReply = {
      replyContent: replyInput,
      replyCreatedAt: Timestamp.fromDate(new Date()),
      replyLikeCount: 0,
      replySender: "Your Username",
      replyUid: "User UID"
    };

    try {
      await addDoc(collection(db, `forum/forum1/forumPost/${selectedPostId}/replies`), newReply);
      setReplyInput("");
      setShowTextBox(false); 
      updateReplies(selectedPostId);
    } catch (error) {
      console.error("Error adding reply:", error);
    }
  };

  const updateReplies = async (postId) => {
    try {
      const postRef = collection(db, `forum/forum1/forumPost/${postId}/replies`);
      const postReplies = await getDocs(postRef);

      let forumReplies = [];

      for (const forumReplyDoc of postReplies.docs) {
        const reply = forumReplyDoc.data();

        forumReplies.push({
          content: reply.replyContent,
          createdAt: reply.replyCreatedAt instanceof Timestamp ? reply.replyCreatedAt.toDate().toLocaleString() : reply.replyCreatedAt,
          likeCount: reply.replyLikeCount,
          sender: reply.replySender,
          uid: reply.replyUid,
        });
      }

      // Update the state with the new replies
      setResult(prevResult =>
        prevResult.map(forum => ({
          ...forum,
          posts: forum.posts.map(post =>
            post.id === postId
              ? { ...post, replies: forumReplies }
              : post
          )
        }))
      );
    } catch (error) {
      console.error("Error updating replies:", error);
    }
  };

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
                        <button onClick={() => replyButtonClick(post.id)} className='interactionButton'>
                          <img src="/reply.png" alt="" className='postcard-reply'/>
                        </button>
                        <button className='interactionButton'><img src="/more.png" alt="" className='postcard-more'/></button>
                      </div>
                      {showTextBox && selectedPostId === post.id && (
                        <div className="reply-box">
                          <input 
                            type="text" 
                            placeholder='Reply here...' 
                            className='replyinputbox' 
                            value={replyInput}
                            onChange={(e) => setReplyInput(e.target.value)}
                          />
                          <button 
                            className='submitReply-button' 
                            type='submit'
                            onClick={handleReplySubmit}
                          >
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
  );
}

export default ForumPreviewPage;
