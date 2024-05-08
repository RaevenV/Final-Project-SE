import React, { useEffect, useState } from "react";
import "./searchBar.css";
import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

function Searchbar() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [filter, setFilter] = useState("");

  const handleChange = (value) => {
    setInput(value);
  };

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  //Entrepreneurship
  //Self Improvement
  //Finance

  useEffect(() => {
    const findData = async () => {
      if (input.trim() === "") {
        setResult([]);
        return;
      }

      const findCollection = query(
        collection(db, "forum"),
        where("forumTitle", ">=", input),
        where("forumTitle", "<=", input + "\uf8ff")
      );

      try {
        const foundDB = await getDocs(findCollection);
        let items = [];

        foundDB.forEach((doc) => {
          const data = doc.data();
          items.push({
            id: doc.id,
            category: data.forumCategory,
            image: data.forumImage,
            member: data.forumMember,
            title: data.forumTitle,
          });
        });

        setResult(items);
        console.log(items);

      } catch (error) {
        console.error("Error fetching data:", error);
        setResult([]);
      }
    };

    findData();
  }, [input]);

  useEffect(() => {
    const filterData = async () => {
      if (filter === "") {
        setResult([]);
        return;
      }

      const filterCollection = query(
        collection(db, "forum"),
        where("forumCategory", "==", filter)
      );

      try {
        const foundDB = await getDocs(filterCollection);
        let filteredItems = [];

        foundDB.forEach((doc) => {
          const data = doc.data();
          filteredItems.push({
            id: doc.id,
            category: data.forumCategory,
            image: data.forumImage,
            member: data.forumMember,
            title: data.forumTitle,
          });
        });

        setResult(filteredItems);
        console.log(filteredItems);
      } catch (error) {
        console.error("Error fetching data:", error);
        setResult([]);
      }
    };

    filterData();
  }, [filter]);

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
            Filter
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleFilterChange("Entrepreneurship")}
              >
                Entrepreneurship
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleFilterChange("Self Improvement")}
              >
                Self Improvement
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleFilterChange("Finance")}
              >
                Finance
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
