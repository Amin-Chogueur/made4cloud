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
      <div className={styles.scrollContainer}>
        <div className={styles.scrollContent}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Logo-Ornikar-Wiki.png"
            width={100}
            height={100}
            alt="ornikar logo"
          />
          <Image
            src="https://pbs.twimg.com/profile_images/876737517093081088/VMdSmUMe_400x400.jpg"
            width={70}
            height={70}
            alt="SPIE logo"
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/b/b7/Logo_esme.jpg"
            width={70}
            height={70}
            alt="esme logo"
          />
          <Image
            src="https://www.advenis.com/wp-content/themes/advenis/imgs/site-logo.png"
            width={120}
            height={120}
            alt="advenis logo"
          />

          <Image
            src="https://desinscription.mediametrie.fr/images/logoMediametrie.png"
            width={140}
            height={140}
            alt="medimetrie logo"
          />
          <Image
            src={
              "https://clusif.fr/wp-content/uploads/2020/02/katana_digital_logo.jpg"
            }
            width={70}
            height={70}
            alt="katana logo"
          />
          <Image
            src="https://cdn.cookielaw.org/logos/db3cf2f9-09f6-47ab-b58f-c5e38cd9dd46/a1a84ecd-fda2-4877-bb5f-74e0b6ac446a/5c97cb95-cd59-4a54-a52f-c3bf65dd49a0/Logo_bleu[46].jpg"
            width={90}
            height={90}
            alt="fred logo"
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Logo_DeltaDore_RVB.jpg"
            width={100}
            height={100}
            alt="deltadore logo"
          />
          <Image
            src={"/images/lvmh.jpg"}
            width={80}
            height={80}
            alt="lvmh logo"
          />
          <Image
            src={"/images/siemens.jpg"}
            width={80}
            height={80}
            alt="siemens logo"
          />
        </div>
      </div>
    </div>
  );
}

export default OurPartners;
