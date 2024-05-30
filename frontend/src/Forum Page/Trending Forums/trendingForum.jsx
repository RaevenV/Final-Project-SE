import React from 'react'
import ForumCard from '../../Universal Components/Forum Template/forumCard'
import "../forum.css"

function TrendingForum() {
  return (
    <>
        <div className='featuredmodules-title-container'>
            <h1 className='featuredmodules-title'>Trending Forums</h1>
            <h3 className='featuredmodules-description'>Find your empowering community</h3>
        </div>
        <div className="trendingForumCard-wrapper">
          <ForumCard 
            title="Business Strategy Summit" 
            img="https://images.pexels.com/photos/5816293/pexels-photo-5816293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <ForumCard 
            title="Biztalk Central"
            img="https://images.pexels.com/photos/5063562/pexels-photo-5063562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <ForumCard
            title="Business Minds Forum"
            img="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
    </>
  )
}

export default TrendingForum