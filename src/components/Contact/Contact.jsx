import styles from "./Contact.module.scss"
import Title from "../Title/Title"
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Title>Get in touch</Title>
      <div className={styles.socials}>
        <a
          href="https://github.com/camligo"
          className={styles.links}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/camilla-ligovic/"
          className={styles.links}
        >
          <FaLinkedin />
        </a>
      </div>
    </div>


  )
}

export default Contact
