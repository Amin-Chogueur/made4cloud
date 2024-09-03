import styles from "./ourTeam.module.css";
function OurTeam() {
  return (
    <div className={styles.ourTeam}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Our Team</h2>
          <p>
            Behind every success story is a dedicated team. Meet the passionate
            individuals at Pulstech, each contributing their unique skills to
            make our collective vision a reality.
          </p>
        </div>
        <div className={styles.widget}></div>
      </div>
    </div>
  );
}

export default OurTeam;
