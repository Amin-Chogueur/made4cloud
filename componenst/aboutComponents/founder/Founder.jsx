import styles from "./founder.module.css";
import OurTeam from "../ourTeam/OurTeam";
function Founder() {
  return (
    <div className={styles.founder}>
      <div className={styles.container}>
        <div className={styles.widget}></div>
        <div className={styles.content}>
          <h2>Founder`s Note</h2>
          <p>
            As the founder of Made4Cloud, I embarked on this journey with a
            vision to redefine digital possibilities. Our commitment to
            excellence and client satisfaction is at the core of everything we
            do. Join us in this transformative adventure.
          </p>
          <span>By Anas</span>
        </div>
      </div>
      <OurTeam />
    </div>
  );
}

export default Founder;
