import Image from "next/image";
import styles from "./card.module.css";
function Card({ content }) {
  return (
    <div className={styles.card}>
      <Image src={content.image} alt="card" width={310} height={300} />
      <div className={styles.content}>
        <h3>{content.title}</h3>
        <p>{content.description}</p>
      </div>
    </div>
  );
}

export default Card;
