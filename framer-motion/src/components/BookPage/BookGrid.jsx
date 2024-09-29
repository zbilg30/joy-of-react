import { motion } from "framer-motion";

import styles from "./bookgrid.module.css";

function BookGrid({ books, handleSelectBook, ...delegated }) {
  return (
    <section {...delegated}>
      <ul className={styles.wrapper}>
        {books.map((book) => (
          <li key={book.isbn}>
            <button
              className={styles.bookBtn}
              onClick={() => handleSelectBook(book)}
            >
              <motion.img
                layoutId={`book-${book.isbn}`}
                alt={book.name}
                src={book.coverSrc}
                className={styles.bookCover}
                draggable={false}
              />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BookGrid;
