import React from 'react'
import "./FeaturedModulesCart.css"
import FeaturedModulesCard from '../FeaturedModulesCard/FeaturedModulesCard'

function FeaturedModulesCart() {
  return (
    <>
        <div className='featuredmodules-title-container'>
            <h1 className='featuredmodules-title'>Trending Modules</h1>
            <h3 className='featuredmodules-description'>Elevate your skill with the most relevant course we have</h3>
        </div>
        <FeaturedModulesCard imgModule="./trendingModules1.jpg" featuredmodulesTitle="Investing fundamentals" featuredmodulesDescription="Dive into investing essentials: risk assessment, portfolio diversification, and fundamental analysis for achieving financial success. Dive into investing essentials: risk assessment, portfolio diversification, and fundamental analysis for achieving financial success." imgMentor="./mentor1.png" mentorName="Giselle Sharon" mentorPosition="Chief Executive of DOOIT"/>
    </>
  )
}

export default FeaturedModulesCart