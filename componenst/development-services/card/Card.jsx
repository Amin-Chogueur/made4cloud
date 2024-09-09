import Image from "next/image";
import styles from "./card.module.css";
function Card({ content }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={content.image} alt="card" width={260} height={260} />
      </div>
      <div className={styles.content}>
        <h3>{content.title}</h3>
        <p>{content.description}</p>
      </div>
    </div>
  );
}

export default Card;
