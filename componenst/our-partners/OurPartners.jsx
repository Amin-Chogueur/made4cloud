import Image from "next/image";
import styles from "./ourPratners.module.css";
function OurPartners() {
  return (
    <div className={styles.content}>
      <h2>Our Trusted Partners</h2>
      <p>
        Join visionary clients who trust Pulstech for their digital journey. Our
        diverse clientele across industries showcases our adaptability and
        commitment to cutting-edge solutions.
      </p>
      <div className={styles.images}>
        <Image
          src={"/images/siemens.jpg"}
          width={100}
          height={100}
          alt="siemens logo"
        />
        <Image
          src={"/images/spie.jpg"}
          width={100}
          height={100}
          alt="SPIE logo"
        />
        <Image
          src={"/images/lvmh.jpg"}
          width={100}
          height={100}
          alt="LVMH logo"
        />
      </div>
    </div>
  );
}

export default OurPartners;
