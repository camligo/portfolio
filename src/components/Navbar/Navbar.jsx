import styles from "./Navbar.module.scss"

const Navbar = () => {
  return (
    <nav className={styles.navTop}>
      <ul className={styles.navMenu}>
        <li className={styles.navItem}>
          <a href="#home" className={styles.navLink}>Home</a>
        </li>
        <li className={styles.navItem}>
          <a href="#projects" className={styles.navLink}>Projects</a>
        </li>
        <li className={styles.navItem}>
          <a href="#about" className={styles.navLink}>About</a>
        </li>
        <li className={styles.navItem}>
          <a href="#skills" className={styles.navLink}>Skills</a>
        </li>
        <li className={styles.navItem}>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
