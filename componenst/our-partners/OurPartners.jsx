import Image from "next/image";
import styles from "./ourPratners.module.css";
function OurPartners() {
  return (
    <div className={styles.content}>
      <h2>Our Trusted Partners</h2>
      <p>
        Join visionary clients who trust Made4Cloud for their digital journey.
        Our diverse clientele across industries showcases our adaptability and
        commitment to cutting-edge solutions.
      </p>
      <div className={styles.images}>
        <Image
          src={"/images/ornikar.svg"}
          width={100}
          height={100}
          alt="ornikar logo"
        />
        <Image
          src={"/images/sgd-pharma.svg"}
          width={100}
          height={100}
          alt="SPIE logo"
        />
        <Image
          src={"/images/esme.png"}
          width={70}
          height={70}
          alt="esme logo"
        />
        <Image
          src={"/images/advenis.png"}
          width={120}
          height={120}
          alt="advenis logo"
        />

        <Image
          src={"/images/logo.svg"}
          width={100}
          height={100}
          alt="medimetrie logo"
        />
        <Image
          src={"/images/truck.png"}
          width={90}
          height={90}
          alt="truck logo"
        />
      </div>
    </div>
  );
}

export default OurPartners;
