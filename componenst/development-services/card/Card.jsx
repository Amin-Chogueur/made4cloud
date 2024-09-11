import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
function Card({ content }) {
  return (
    <Link href={"/services"} className={styles.card}>
      <div className={styles.content}>
        <h3>{content.title}</h3>
      </div>
      <div className={styles.imageContainer}>
        <Image src={content.image} alt="card" width={260} height={260} />
      </div>
    </Link>
  );
}

export default Card;
