import React from "react";
import { motion } from "framer-motion";

import styles from "./style.module.css";

function Toasty() {
  const [isShown, setIsShown] = React.useState(false);

  const wrapperRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setIsShown(entry.isIntersecting);
    });

    observer.observe(wrapperRef.current);
  }, []);

  const translateX = isShown ? "0%" : "100%";

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <motion.div
        className={styles.character}
        animate={{
          x: translateX,
        }}
        transition={{
          type: "spring",
          stiffness: isShown ? 300 : 600,
          damping: isShown ? 100 : 40,
          restDelta: 0.01,
        }}
      >
        👻
      </motion.div>
    </div>
  );
}

export default Toasty;
