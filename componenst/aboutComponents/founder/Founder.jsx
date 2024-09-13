import styles from "./founder.module.css";
import OurTeam from "../ourTeam/OurTeam";
import Image from "next/image";
function Founder() {
  return (
    <div className={styles.founder}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={"/images/co-founder.png"}
            width={250}
            height={250}
            alt="founder"
          />
        </div>
        <div className={styles.content}>
          <h2>Founder`s Note</h2>
          <p>
            As the founder of Made4Cloud, I embarked on this journey with a
            vision to redefine digital possibilities. Our commitment to
            excellence and client satisfaction is at the core of everything we
            do. Join us in this transformative adventure.
          </p>
          <span>By Anes</span>
        </div>
      </div>
      <OurTeam />
    </div>
  );
}

export default Founder;
