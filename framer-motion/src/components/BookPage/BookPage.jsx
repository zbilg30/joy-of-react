import React from "react";

import DATA from "./data";

import BookGrid from "./BookGrid";
import ReadingList from "./ReadingList";
import styles from "./bookpage.module.css";

function BookPage() {
  const [books, setBooks] = React.useState(DATA);

  function toggleBook(toggledBook) {
    const nextBooks = books.map((book) => {
      if (book.isbn !== toggledBook.isbn) {
        return book;
      }

      return {
        ...book,
        selected: !book.selected,
      };
    });

    setBooks(nextBooks);
  }

  const selectedBooks = books.filter((book) => book.selected);
  const unselectedBooks = books.filter((book) => !book.selected);

  return (
    <div className={styles.wrapper}>
      <BookGrid
        className={styles.grid}
        books={unselectedBooks}
        handleSelectBook={toggleBook}
      />
      {selectedBooks.length > 0 && (
        <ReadingList books={selectedBooks} handleRemoveBook={toggleBook} />
      )}
    </div>
  );
}

export default BookPage;
