import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constant/constant";
import styles from "./footer.module.css";
function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.desc}>
          <Image src={"/images/logo.png"} width={150} height={150} alt="logo" />
          <p>
            At Pulstech, we are not just developers; we are architects of
            digital transformation. Established in 2022 in the vibrant city of
            Paris, Pulstech brings over a decade of expertise in Microsoft
            technologies, making us your trusted partner in navigating the
            ever-evolving digital landscape.
          </p>
        </div>
        <div className={styles.content}>
          <div>
            <h3>Navigation</h3>
            <ul className={styles.links}>
              {navLinks.map((link, i) => {
                return (
                  <li key={i}>
                    <Link className={styles.link} href={link.url}>
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.location}>
            <div>
              <h3>France Office</h3>
              <p>🔽Rue sant John Doe</p>
              <h3>London Office</h3>
              <p>🔽Rue sant John Doe</p>
            </div>
          </div>
          <div className={styles.contact}>
            <h3>Contact</h3>
            <ul>
              <li>📞 +3398372782</li>
              <li>Facebook</li>
              <li>Linkedin</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        Copyright © 2024 made4cloud. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
