import styles from "./projects.module.css";
import GetInTouch from "@/componenst/getInTouch/GetInTouch";
import AboutFirst from "@/componenst/aboutComponents/aboutFirstSection/AboutFirst";
import Project from "@/componenst/project/Project";
const projectContent = [
  {
    title: "Saas Solutions",
    image: "/images/lvmh.jpg",

    description:
      "Elevate your online presence with bespoke Saas websites developed using state-of-the-art technologies such as Microsoft, Java, and Javascript.",
    direction: "left",
  },
  {
    title: "Solution Migration",
    image: "/images/spie.jpg",
    description:
      "Seamlessly transition your systems with our expertise in solution migration, including data migration strategies.",
    direction: "right",
  },
  {
    title: "Website Development",
    image: "/images/siemens.jpg",
    description:
      "Harness the power of the web with dynamic websites built on Facbook, React JS, Next JS, NodeJS, Express JS and other cutting-edge platforms.",
    direction: "left",
  },
];
const projectData = [
  {
    title: "Our Projects",
    description:
      "We have successfully completed projects across various industries. Below are some of our notable collaborations:",
    buttonContent: "Get Started!",
    image: "/images/services4.jpg",
  },
];
function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <AboutFirst data={projectData[0]} />
      <div className={styles.allProjects}>
        {projectContent.map((project, i) => {
          return <Project key={i} projectContent={project} />;
        })}
      </div>
      <GetInTouch />
    </div>
  );
}

export default Projects;
