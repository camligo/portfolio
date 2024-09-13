import ProjectCard from "../ProjectCard/ProjectCard"
import styles from "./Projects.module.scss"
import phone from "../../assets/phone.png"
import laptop from "../../assets/laptop.png"
import Title from "../Title/Title"

const Projects = () => {
  const projectsData = [
    {
      title: 'To-do app',
      img: phone,
      description: "Simple to-do app built with Spring and React TypeScript. A user can add new tasks with an assigned category and due date. A task can also be marked as high priority and will then appear at the top of the user's to-do list.",
      githubLink: "https://github.com/camligo/todo-app",
      liveLink: "",
      mockupType: "phone"
    },
    {
      title: 'React E-shop',
      img: phone,
      description: 'Online grocery store built with React JS. The product data is stored in Firebase.',
      githubLink: "https://github.com/camligo/e-shop",
      liveLink: "",
      mockupType: "phone"
    },
    {
      title: 'BookFinder',
      img: laptop,
      description: 'Search for your next read. A user is able to search for a book inside the Google Books database and can get more details about a certain title.',
      githubLink: "https://github.com/camligo/google-books",
      liveLink: "",
      mockupType: "laptop"
    },
    {
      title: 'Morse code translator',
      img: laptop,
      description: 'Simple translator built with vanilla JavaScript and SCSS.',
      githubLink: "https://github.com/camligo/morse-code-translator",
      liveLink: "",
      mockupType: "laptop"
    },
  ];


  return (
    <div className={styles.projectsContainer}>
      <Title textAlign="center">Projects</Title>
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          img={project.img}
          description={project.description}
          githubLink={project.githubLink}
          liveLink={project.liveLink}
          mockupType={project.mockupType}
          isReversed={index % 2 !== 0}
        />
      ))}
    </div>
  )
}

export default Projects
