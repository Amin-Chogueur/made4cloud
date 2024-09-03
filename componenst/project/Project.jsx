import Image from "next/image";
import styles from "./project.module.css";

function Project({ projectContent }) {
  return (
    <div className={styles.project}>
      <div
        className={`${styles.container} ${
          projectContent.direction === "left" && styles.left
        }`}
      >
        <div className={styles.image}>
          <Image
            src={projectContent.image}
            width={400}
            height={400}
            alt="project"
          />
        </div>
        <div className={styles.content}>
          <h2>{projectContent.title}</h2>
          <p>{projectContent.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
