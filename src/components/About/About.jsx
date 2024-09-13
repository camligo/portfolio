import Title from "../Title/Title"
import styles from "./About.module.scss"

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <Title>About me</Title>
        <p>
          <span className={styles.aboutText}>
            I'm Camilla, an urban planner turned junior web developer based in Sydney.
          </span>
          <span className={styles.aboutText}>
            With skills in React, Java and TypeScript, I'm keen to dive into the right gig where I can keep learning and growing.
          </span>
          <span className={styles.aboutText}>
            I'm excited to continue to refine my skills with the right company.
          </span>
          <span className={styles.aboutText}>
            Feel free to check out my projects or send me a message through my socials!
          </span>
        </p>
      </div>
  )
}

export default About
