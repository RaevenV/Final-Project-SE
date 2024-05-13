import React, { useEffect, useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./searchBar.css";
import "./moduleSearchbar.css";
import "./forumSearchBar.css";
import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import ForumCard from "../Forum Template/forumCard";

function ForumSearchbar() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [filter, setFilter] = useState("");

  const handleChange = (value) => {
    setInput(value);
  };

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  let findQuery = "";

  useEffect(() => {
    const findData = async () => {
      if (input === "" && filter === "") {
        findQuery = query(collection(db, "forum"));
      } else if (input != "" && filter === "") {
        findQuery = query(
          collection(db, "forum"),
          where("forumTitle", ">=", input),
          where("forumTitle", "<=", input + "\uf8ff")
        );
      } else if (input === "" && filter != "") {
        findQuery = query(
          collection(db, "forum"),
          where("forumCategory", "==", filter)
        );
      } else if (input != "" && filter != "") {
        findQuery = query(
          collection(db, "forum"),
          where("forumTitle", ">=", input),
          where("forumTitle", "<=", input + "\uf8ff"),
          where("forumCategory", "==", filter)
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
        console.log(forums);
      } catch (error) {
        console.error("Error fetching data:", error);
        setResult([]);
      }
    };

    findData();
  }, [input, filter]);

  return (
    <>
      <div className="searchFilter-container">
        <div className="searchBar-container">
          <input
            placeholder="What are you looking for?"
            type="text"
            value={input}
            className="searchBar-input"
            onChange={(e) => handleChange(e.target.value)}
          />

          <img src="./search.png" alt="" className="search-icon" />
        </div>

        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {filter === "" ? "Filter" : filter}
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className={`dropdown-item ${
                  filter === "Entrepreneurship" ? "active-filter" : ""
                }`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleFilterChange("Entrepreneurship");
                }}
              >
                Entrepreneurship
              </a>
            </li>
            <li>
              <a
                className={`dropdown-item ${
                  filter === "Self Improvement" ? "active-filter" : ""
                }`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleFilterChange("Self Improvement");
                }}
              >
                Self Improvement
              </a>
            </li>
            <li>
              <a
                className={`dropdown-item ${
                  filter === "Finance" ? "active-filter" : ""
                }`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleFilterChange("Finance");
                }}
              >
                Finance
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleFilterChange("");
                }}
              >
                Remove Filter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div id="result-container-forum">
        <div id="result-wrapper-forum">
          {result.map((forum, index) => (
            <div className="forum-cart-wrapper" key={index}>
              <ForumCard
                img={forum.img}
                title={forum.title}
                people={forum.member}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ForumSearchbar;
