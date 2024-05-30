import React from 'react'
import ForumSearchbar from '../Universal Components/Search & Filter/forumSearchbar'
import HomeNavbar from '../Universal Components/navbars/homeNavbar';
import Footer from '../Universal Components/footer';
import TrendingForum from './Trending Forums/trendingForum';

function ForumPage() {
  return (
    <>
        <HomeNavbar/>
        <div className="modulepage-container">
          <TrendingForum/>
          <ForumSearchbar />
        </div>
        <Footer/>
    </>
  )
}

export default ForumPage;