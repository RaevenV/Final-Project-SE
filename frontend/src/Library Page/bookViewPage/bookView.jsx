import React, { useEffect, useState } from "react";
import "./bookView.css";
import HomeNavbar from "../../Universal Components/navbars/homeNavbar";
import Footer from "../../Universal Components/footer";
import BookViewCart from "../../Universal Components/Book View Cart/bookViewCart";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

function BookView() {
  const { searchID } = useParams();
  const [result, setResult] = useState([]);
  let findQuery = "";

  useEffect(() => {
    const findData = async () => {
      if (searchID !== "") {
        findQuery = query(
          collection(db, "library"),
          where("bookTitle", "==", searchID)
        );
      }

      try {
        const foundDB = await getDocs(findQuery);
        let books = [];

        for (const doc of foundDB.docs) {
          const book = doc.data();

          books.push({
            id: doc.id,
            bookId: book.bookID,
            category: book.bookCategory,
            coverImg: book.bookCover,
            description: book.bookDesc,
            pages: book.bookPages,
            rating: book.bookRating,
            title: book.bookTitle,
            author: book.author,
          });
        }

        setResult(books);
      } catch (error) {
        console.error("Error fetching data:", error);
        setResult([]);
      }
    };

    findData();
  }, [searchID]);

  const book = result.length > 0 ? result[0] : null;

  return (
    <>
      <HomeNavbar />
      <div className="bookView-MainContainer">
        {book ? (
          <BookViewCart
            img={book.coverImg}
            title={book.title}
            author={book.author}
            stars={book.rating}
            rating={book.rating}
            pages={book.pages}
            desc={book.description}
          />
        ) : (
          <p>No book found</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default BookView;
