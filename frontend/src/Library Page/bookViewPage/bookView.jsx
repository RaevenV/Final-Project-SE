import React from "react"
import "./bookView.css"
import HomeNavbar from "../../Universal Components/navbars/homeNavbar";
import Footer from "../../Universal Components/footer";
import BookViewCart from "../../Universal Components/Book View Cart/bookViewCart";

function BookView(){
    return (
        <>
        <HomeNavbar />
           <div className="bookView-MainContainer">
                <BookViewCart img="/bookCover1.png" title="Financial Basics For Business" author="Allane Mannings" 
                stars="5" rating="51,997" pages="141" desc="Dive into investing essentials: risk assessment, portfolio diversification, and fundamental 
                analysis for achieving financial success. Dive into investing essentials: risk assessment, portfolio 
                diversification, and fundamental analysis for achieving financial success." />
           </div>
        <Footer />
        </>
    )
}

export default BookView