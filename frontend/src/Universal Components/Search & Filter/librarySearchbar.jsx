import React, { useEffect, useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./searchBar.css";
import "./librarySearchBar.css";
import "./moduleSearchbar.css";
import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import BookTemplate from "../Book Template/bookTemplate";

function LibrarySearchbar() {
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
        findQuery = query(collection(db, "library"));
      } else if (input != "" && filter === "") {
        findQuery = query(
          collection(db, "library"),
          where("bookTitle", ">=", input),
          where("bookTitle", "<=", input + "\uf8ff")
        );
      } else if (input === "" && filter != "") {
        findQuery = query(
          collection(db, "library"),
          where("bookCategory", "==", filter)
        );
      } else if (input != "" && filter != "") {
        findQuery = query(
          collection(db, "library"),
          where("bookTitle", ">=", input),
          where("bookTitle", "<=", input + "\uf8ff"),
          where("bookCategory", "==", filter)
        );
      }

      try {
        const foundDB = await getDocs(findQuery);
        let books = [];

        for (const doc of foundDB.docs) {
          const book = doc.data();

          books.push({
            id: doc.id,
            bookId: book.bookID,
            category: book.bookCategory,
            coverImg: book.bookCover,
            description: book.bookDesc,
            pages: book.bookPages,
            rating: book.bookRating,
            title: book.bookTitle,
          });
        }

        setResult(books);
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

      <div id="result-container-library">
        <div id="result-wrapper-library">
          {result.map((book, index) => (
            <div className="library-cart-wrapper" key={index}>
              <BookTemplate img={book.coverImg} title={book.title} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LibrarySearchbar;
