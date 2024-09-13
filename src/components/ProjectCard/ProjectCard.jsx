// ProjectCard.js
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ title, img, description, githubLink, liveLink, mockupType, isReversed }) => {
  const imageStyle =
    mockupType === "phone"
      ? { width: "160px", height: "auto" }
      : { width: "auto", height: "190px" }
    ;


  const containerClass = isReversed ? styles.projectContainerReversed : styles.projectContainer;

  return (
    <article className={containerClass}>
      <img src={img} alt={title} className={styles.image} style={imageStyle}/>
      <div className={styles.textContainer}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.projectLinks}>
          {githubLink && (
            <small><a href={githubLink} target="_blank" rel="noopener noreferrer">
              Github
            </a></small>
          )}
          {githubLink && liveLink && <span>|</span>}
          {liveLink && (
            <small><a href={liveLink} target="_blank" rel="noopener noreferrer">
              Live site
            </a></small>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
