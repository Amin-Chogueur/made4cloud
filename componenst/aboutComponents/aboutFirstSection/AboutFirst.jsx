import Image from "next/image";
import styles from "./aboutFirst.module.css";
import Link from "next/link";
function AboutFirst({ data }) {
  const directionStyles = data?.directionStyles;
  return (
    <div className={styles.aboutFirst}>
      <div
        className={`${styles.container} ${directionStyles ? styles.left : ""}`}
      >
        <div
          className={`${styles.content} ${directionStyles ? styles.left : ""}`}
        >
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <button>
            <Link href={"/contact"}>{data.buttonContent}</Link>
          </button>
        </div>
        {data.image && (
          <div className={styles.imageContainer}>
            <Image fill alt={data.title} src={data.image} />
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutFirst;
