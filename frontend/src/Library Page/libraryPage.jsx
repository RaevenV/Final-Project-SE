import React from 'react'
import Searchbar from '../Universal Components/Search & Filter/searchBar'
import Footer from '../Universal Components/footer'
import LibraryNavbar from '../Universal Components/navbars/libraryNavbar'
import './libraryPage.css'
import BookTemplate from '../Universal Components/Book Template/bookTemplate'

function LibraryPage() {
  return (
    <>
      <LibraryNavbar />
        <div className="libraryPage-container">
        <Searchbar />
        </div>
        <div className="libraryBook-container">
            <BookTemplate img="/bookTemplatePic1.png" title="The Intelligent Investor" />
        </div>
      <Footer />
    </>
  );
}

export default LibraryPage
