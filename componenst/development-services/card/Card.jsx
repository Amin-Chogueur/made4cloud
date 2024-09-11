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
        <Image
          src={content.image}
          alt={`${content.title} image`}
          width={220}
          height={220}
        />
      </div>
    </Link>
  );
}

export default Card;
