import { useState } from "react";

import { motion } from "framer-motion";

import styles from "./style.module.css";

function Toggle({ ...delegated }) {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isEnabled}
      className={styles.wrapper}
      onClick={() => setIsEnabled(!isEnabled)}
      {...delegated}
    >
      <motion.span
        className={styles.ball}
        initial={false}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 40,
        }}
        animate={{
          x: isEnabled ? "100%" : "0%",
        }}
      />
    </button>
  );
}

export default Toggle;
