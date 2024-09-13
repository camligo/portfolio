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
        <li className={styles.icon}><FaReact /></li>
        <li className={styles.icon}><FaJava /></li>
        <li className={styles.icon}><SiSpring /></li>
        <li className={styles.icon}><IoLogoJavascript /></li>
        <li className={styles.icon}><BiLogoTypescript /></li>
        <li className={styles.icon}><FaHtml5 /></li>
        <li className={styles.icon}><FaSass /></li>
        <li className={styles.icon}><GrMysql /></li>
        <li className={styles.icon}><SiRubyonrails /></li>
        <li className={styles.icon}><DiRuby /></li>
        <li className={styles.icon}><FaAws /></li>
        <li className={styles.icon}><FaGitAlt /></li>
      </ul>
    </>
  )
}

export default Skills
