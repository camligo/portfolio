import styles from "./Skills.module.scss"
import Title from "../Title/Title"
import { FaJava, FaHtml5, FaSass, FaReact, FaAws, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiSpring, SiRubyonrails } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiRuby } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";

const Skills = () => {
  return (
    <>
      <Title>Skills</Title>
      <ul className={styles.iconsContainer}>
        <div className={styles.skillContainer}>
          <li className={styles.icon}><FaReact /></li>
          <small className={styles.skillTitle}>React</small>
        </div>
        <div className={styles.skillContainer}>
          <li className={styles.icon}><FaJava /></li>
          <small className={styles.skillTitle}>Java</small>
        </div>
        <div className={styles.skillContainer}>
          <li className={styles.icon}><SiSpring /></li>
          <small className={styles.skillTitle}>Spring</small>
        </div>
        <div className={styles.skillContainer}>
          <li className={styles.icon}><IoLogoJavascript /></li>
          <small className={styles.skillTitle}>JavaScript</small>
        </div>
        <div className={styles.skillContainer}>
          <li className={styles.icon}><BiLogoTypescript /></li>
          <small className={styles.skillTitle}>TypeScript</small>
        </div>
        <div className={styles.skillContainer}>
          <li className={styles.icon}><FaHtml5 /></li>
          <small className={styles.skillTitle}>HTML</small>
        </div>
        <div className={styles.skillContainer}>
          <li className={styles.icon}><FaSass /></li>
          <small className={styles.skillTitle}>Sass</small>
        </div>
        <div className={styles.skillContainer}>
          <li className={styles.icon}><GrMysql /></li>
          <small className={styles.skillTitle}>MySQL</small>
        </div>
        <div className={styles.skillContainer}>
          <li className={styles.icon}><DiRuby /></li>
          <small className={styles.skillTitle}>Ruby</small>
        </div>
        <div className={styles.skillContainer}>
          <li className={styles.icon}><SiRubyonrails /></li>
          <small className={styles.skillTitle}>Rails</small>
        </div>
        <div className={styles.skillContainer}>
          <li className={styles.icon}><FaAws /></li>
          <small className={styles.skillTitle}>AWS</small>
        </div>
        <div className={styles.skillContainer}>
          <li className={styles.icon}><FaGitAlt /></li>
          <small className={styles.skillTitle}>Git</small>
        </div>
      </ul>
    </>
  )
}

export default Skills
