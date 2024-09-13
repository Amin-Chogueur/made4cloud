import Image from "next/image";
import styles from "./aboutFirst.module.css";
import Link from "next/link";
function AboutFirst({ data, largeImage }) {
  const directionStyles = data?.directionStyles;
  return (
    <div className={styles.aboutFirst} id={data.id}>
      <div
        className={`${styles.container} ${directionStyles ? styles.left : ""}`}
      >
        <div
          className={`${styles.content} ${directionStyles ? styles.left : ""}`}
        >
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <button>
            <Link href={`${data.link ? data.link : "/contact"}`}>
              {data.buttonContent}
            </Link>
          </button>
        </div>
        {largeImage ? (
          <Image width={600} height={600} alt={data.title} src={data.image} />
        ) : (
          <div className={styles.imageContainer}>
            {data.image && (
              <Image
                width={260}
                height={260}
                alt={data.title}
                src={data.image}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutFirst;
