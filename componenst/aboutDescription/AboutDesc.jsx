import styles from "./about.module.css";
import Image from "next/image";
import Link from "next/link";
function AboutDesc({ data }) {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <button>
            <Link href={"/contact"}>{data.buttonContent}</Link>
          </button>
        </div>
        <div className={styles.imageContainer}>
          <Image width={600} height={600} alt={data.title} src={data.image} />
        </div>
      </div>
    </div>
  );
}

export default AboutDesc;
