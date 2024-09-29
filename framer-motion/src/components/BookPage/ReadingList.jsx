import React from "react";
import { motion } from "framer-motion";
import { X } from "react-feather";

import styles from "./readinglist.module.css";

function ReadingList({ books, handleRemoveBook }) {
  const [highlightedBook, setHighlightedBook] = React.useState(null);

  return (
    <>
      <div
        className={styles.wrapper}
        onMouseLeave={() => setHighlightedBook(null)}
      >
        <h2>Reading List</h2>
        <ol className={styles.books}>
          {books.map((book, bookIndex) => {
            const reverseIndex = books.length - bookIndex - 1;
            let height = Math.max(50 - reverseIndex * 5, 10);

            if (highlightedBook === bookIndex) {
              height = 100;
            }
            return (
              <li
                key={book.isbn}
                style={{ height }}
                onMouseEnter={() => setHighlightedBook(bookIndex)}
                onFocus={() => setHighlightedBook(null)}
              >
                <motion.img
                  layoutId={`book-${book.isbn}`}
                  alt={book.name}
                  src={book.coverSrc}
                  draggable={false}
                  className={styles.bookCover}
                />
                <button
                  className={styles.deleteBtn}
                  onClick={() => handleRemoveBook(book)}
                >
                  <X />
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}

export default ReadingList;
