import React from 'react'
import Footer from '../Universal Components/footer'
import './libraryPage.css'
import LibrarySearchbar from '../Universal Components/Search & Filter/librarySearchbar'
import HomeNavbar from '../Universal Components/navbars/homeNavbar'
import ReaderTopPicks from './ReaderTopPicks/readerTopPicks'

function LibraryPage() {
  return (
    <>
      <HomeNavbar/>
      <div className="libraryPage-container">
        <ReaderTopPicks/>
        <LibrarySearchbar/>
      </div>
      <Footer />
    </>
  );
}

export default LibraryPage
