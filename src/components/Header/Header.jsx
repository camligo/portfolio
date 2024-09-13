import Navbar from "../Navbar/Navbar"
import HamburgerNav from "../HamburgerNav/HamburgerNav"
import styles from "./Header.module.scss"
import { useEffect, useState } from "react"

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480); // Initialize state based on screen width

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480); // Update state when screen size changes
    };

    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup listener on component unmount
    };
  }, []);


  return (
    <header className={styles.header}>
      {isMobile ? <HamburgerNav /> : <Navbar />}
    </header>
  )
}

export default Header
