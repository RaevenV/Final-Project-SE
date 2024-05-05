import React from 'react';
import './searchBar.css'

function Searchbar(){
    return (
      <>
        <div className="searchFilter-container">
          <div className="searchBar-container">
            <input
              placeholder="What are you looking for?"
              type="text"
              className="searchBar-input"
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
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
}


export default Searchbar;