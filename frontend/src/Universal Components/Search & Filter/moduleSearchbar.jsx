import React, { useEffect, useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./searchBar.css";
import "./moduleSearchbar.css";
import "./librarySearchBar.css";
import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import ModuleCart from "../Module Cart/moduleCart";

function ModuleSearchbar() {
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
        findQuery = query(collection(db, "module"));
      } else if (input !== "" && filter === "") {
        findQuery = query(
          collection(db, "module"),
          where("modTitle", ">=", input),
          where("modTitle", "<=", input + "\uf8ff")
        );
      } else if (input === "" && filter !== "") {
        findQuery = query(
          collection(db, "module"),
          where("moduleCategory", "==", filter)
        );
      } else if (input !== "" && filter !== "") {
        findQuery = query(
          collection(db, "module"),
          where("modTitle", ">=", input),
          where("modTitle", "<=", input + "\uf8ff"),
          where("moduleCategory", "==", filter)
        );
      }

      try {
        const foundDB = await getDocs(findQuery);
        let modules = [];

        for (const doc of foundDB.docs) {
          const data = doc.data();
          const subModuleRef = collection(doc.ref, "subModule");
          const subModule = await getDocs(subModuleRef);

          let subModules = [];

          subModule.forEach((subModuleDoc) => {
            const subData = subModuleDoc.data();
            subModules.push({
              chapterDesc1: subData.chapterDesc1,
              chapterDesc2: subData.chapterDesc2,
              chapterTitle1: subData.chapterTitle1,
              chapterTItle2: subData.chapterTItle2,
              title: subData.title,
              videoLink: subData.videoLink,
            });
          });

          modules.push({
            id: doc.id,
            moduleId: data.modNum,
            bookReference: data.bookRef,
            mentors: data.mentors,
            moduleDescription: data.modDesc,
            moduleImg: data.modImage,
            moduleTitle: data.modTitle,
            moduleCategory: data.moduleCategory,
            subModules: subModules,
          });
        }

        setResult(modules);
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
            id="filterBtn"
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

      <div id="result-container">
        <div id="result-wrapper">
          {result.map((module, index) => (
            <div className="module-cart-wrapper" key={index}>
              <ModuleCart
                img={module.moduleImg}
                title={module.moduleTitle}
                description={module.moduleDescription}
                link={`/modulePreview/${module.moduleTitle}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ModuleSearchbar;
