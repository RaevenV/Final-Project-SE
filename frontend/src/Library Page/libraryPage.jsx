import React from 'react'
import Searchbar from '../Universal Components/Search & Filter/searchBar'
import Footer from '../Universal Components/footer'
import LibraryNavbar from '../Universal Components/navbars/libraryNavbar'
import './libraryPage.css'

function LibraryPage() {
  return (
    <>
      <LibraryNavbar />
      <div className="libraryPage-container">
        <Searchbar />
        <Footer />
      </div>
    </>
  );
}

export default LibraryPage
