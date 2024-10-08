import Link from "next/link";
import styles from "./hero.module.css";
import Image from "next/image";

import NumberCounter from "@/componenst/counter/Counter";
function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h2> Empowering Innovation through Technology</h2>
        <p>
          At Made4Cloud, we are not just developers; we are architects of
          digital transformation. Established 2 in the vibrant city of Paris,
          Made4Cloud brings over a decade of expertise in Salesforce ecosystem,
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
            <h3 style={{ display: "flex" }}>
              <NumberCounter num={15} />+
            </h3>
            <span />
            <p>Clients</p>
          </div>
          <div className={styles.box}>
            <h3 style={{ display: "flex" }}>
              {" "}
              <NumberCounter num={20} />+
            </h3>
            <span />
            <p>Projects</p>
          </div>
          <div className={styles.box}>
            <h3 style={{ display: "flex" }}>
              {" "}
              <NumberCounter num={11} />+
            </h3>
            <span />
            <p>Certificates</p>
          </div>
        </div>
      </div>
      <div className={styles.heroImage}>
        <Image
          className={styles.image}
          src={"/images/hero.jpg"}
          width={490}
          height={490}
          alt="hero image"
        />
      </div>
    </div>
  );
}

export default Hero;
