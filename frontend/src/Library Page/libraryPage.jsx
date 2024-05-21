import React from 'react'
import Searchbar from '../Universal Components/Search & Filter/searchBar'
import Footer from '../Universal Components/footer'
import './libraryPage.css'
import BookTemplate from '../Universal Components/Book Template/bookTemplate'
import LibrarySearchbar from '../Universal Components/Search & Filter/librarySearchbar'
import HomeNavbar from '../Universal Components/navbars/homeNavbar'

function LibraryPage() {
  return (
    <>
      <HomeNavbar/>
      <div className="libraryPage-container">
        <LibrarySearchbar/>
      </div>
      <Footer />
    </>
  );
}

export default LibraryPage
