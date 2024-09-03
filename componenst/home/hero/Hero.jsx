import Link from "next/link";
import styles from "./hero.module.css";
import Image from "next/image";
function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h2> Empowering Innovation through Technology</h2>
        <p>
          At Pulstech, we are not just developers; we are architects of digital
          transformation. Established in 2022 in the vibrant city of Paris,
          Pulstech brings over a decade of expertise in Microsoft technologies,
          making us your trusted partner in navigating the ever-evolving digital
          landscape.
        </p>
        <div className={styles.btns}>
          <button>
            <Link href={"/contact"}>Get Started!</Link>
          </button>
        </div>
        <div className={styles.statistic}>
          <div className={styles.box}>
            <h3>12+</h3>
            <span />
            <p>Clients</p>
          </div>
          <div className={styles.box}>
            <h3>20+</h3>
            <span />
            <p>Projects</p>
          </div>
        </div>
      </div>
      <div className={styles.heroImage}>
        <Image
          className={styles.image}
          src={"/images/hero.jpg"}
          width={450}
          height={450}
          alt="hero image"
        />
      </div>
    </div>
  );
}

export default Hero;
