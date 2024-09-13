import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

function Card({ content }) {
  return (
    <a href={`/services#${content.id}`} className={styles.card}>
      <div className={styles.content}>
        <h3>{content.title}</h3>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={content.image}
          alt={`${content.title} image`}
          width={220}
          height={220}
        />
      </div>
    </a>
  );
}

export default Card;
