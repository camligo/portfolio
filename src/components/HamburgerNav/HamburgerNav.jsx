import { useState } from 'react';
import styles from "./HamburgerNav.module.scss"

const HamburgerNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.hamburgerNav} ${isOpen ? styles.active : ''}`}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
        <li className={styles.navItem}>
          <a href="" className={styles.navLink} onClick={toggleMenu}>Home</a>
        </li>
        <li className={styles.navItem}>
          <a href="#skills" className={styles.navLink} onClick={toggleMenu}>Skills</a>
        </li>
        <li className={styles.navItem}>
          <a href="#projects" className={styles.navLink} onClick={toggleMenu}>Projects</a>
        </li>
        <li className={styles.navItem}>
          <a href="#about" className={styles.navLink} onClick={toggleMenu}>About</a>
        </li>
        <li className={styles.navItem}>
          <a href="#contact" className={styles.navLink} onClick={toggleMenu}>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerNav;
