import ProjectCard from "../ProjectCard/ProjectCard"
import styles from "./Projects.module.scss"
import pic from "../../assets/phone.png"
import Title from "../Title/Title"

const Projects = () => {
  const projectsData = [
    {
      title: 'Project One',
      img: pic,
      description: 'Description of project one.',
      githubLink: "https://www.google.com",
      liveLink: "https://www.google.com"
    },
    {
      title: 'Project Two',
      img: pic,
      description: 'Description of project two.',
      githubLink: "https://www.google.com",
      liveLink: "https://www.google.com"
    },
  ];


  return (
    <div className={styles.projectsContainer}>
      <Title>Projects</Title>
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          img={project.img}
          description={project.description}
          githubLink={project.githubLink}
          liveLink={project.liveLink}
        />
      ))}
    </div>
  )
}

export default Projects
