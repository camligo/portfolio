import styles from "./ProjectCard.module.scss"

const ProjectCard = ({ title, img, description, githubLink, liveLink }) => {
  return (
    <div className={styles.projectContainer}>
      <h3 className={styles.projectTitle}>{title}</h3>
      <img src={img} alt={title} className={styles.image}/>
      <p className={styles.description}>{description}</p>
      <div className={styles.projectLinks}>
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            Github
          </a>
        )}
        {githubLink && liveLink && <span>|</span>}
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            Live site
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
