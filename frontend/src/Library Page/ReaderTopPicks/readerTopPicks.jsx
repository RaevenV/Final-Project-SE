import React from 'react'
import './readerTopPicks.css'
import BookTemplate from '../../Universal Components/Book Template/bookTemplate';

function ReaderTopPicks() {
  return (
    <>
      <div className="top-picks-title">Reader Top Picks</div>
      <div className="top-picks-books">
        <BookTemplate img="./book covers/bookTemplatePic1.png" title="Financial Basics for Business"/>
        <BookTemplate img="./book covers/bookTemplatePic2.png" title="Atomic Habits"/>
        <BookTemplate img="./book covers/bookTemplatePic3.png" title="Stranger at Work"/>
      </div>
    </>
  );
}

export default ReaderTopPicks
