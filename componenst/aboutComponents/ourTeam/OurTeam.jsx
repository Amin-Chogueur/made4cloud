import styles from "./ourTeam.module.css";
import Image from "next/image";
function OurTeam() {
  return (
    <div className={styles.ourTeam}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Our Team</h2>
          <p>
            Behind every success story is a dedicated team. Meet the passionate
            individuals at Made4Cloud, each contributing their unique skills to
            make our collective vision a reality.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={"/images/hands.png"}
            width={250}
            height={250}
            alt="our team"
          />
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
