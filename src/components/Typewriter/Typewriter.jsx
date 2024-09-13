import { useEffect, useState } from "react";
import styles from "./Typewriter.module.scss"

const Typewriter = () => {
  const string = "Web Developer";
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingInterval;

    if (!isDeleting && index < string.length) {
      typingInterval = setInterval(() => {
        setIndex(prevIndex => prevIndex + 1);
      }, 120);
    } else if (isDeleting && index > 0) {
      typingInterval = setInterval(() => {
        setIndex(prevIndex => prevIndex - 1);
      }, 120);
    } else if (!isDeleting && index === string.length) {
      setTimeout(() => setIsDeleting(true), 500);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
    }

    return () => clearInterval(typingInterval);
  }, [index, isDeleting]);


  return (
    <div className={styles.textContainer}>
      <h1>Camilla Ligovic</h1>
      <h1 id={styles.typewriterText}>
        <span id={styles.typewriter}>{string.slice(0, index)}</span>
        <span id={styles.cursor}>|</span>
      </h1>
    </div>
  )
}

export default Typewriter
