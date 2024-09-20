import styles from "./version.module.css";
import Wavy from "@/componenst/waveBackground/Wavy";
function Version() {
  return (
    <div className={styles.versionContianer}>
      <div className={styles.container}>
        <h2>Vision and Mission</h2>
        <p>
          At Made4Cloud, we envision a future where businesses thrive through
          seamless digital experiences. Our mission is to empower organizations
          with cutting-edge technology solutions, fostering growth and success.
        </p>
      </div>
      <Wavy />
    </div>
  );
}

export default Version;
