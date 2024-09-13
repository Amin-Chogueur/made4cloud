import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constant/constant";
import { GiPositionMarker } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.desc}>
          <Image
            src={"/images/made4cloudLogo.png"}
            width={150}
            height={150}
            alt="logo"
          />
          <p>
            At Made4Cloud, we are not just developers; we are architects of
            digital transformation. Established 2 in the vibrant city of Paris,
            Made4Cloud brings over a decade of expertise in Salesforce
            ecosystem, making us your trusted partner in navigating the
            ever-evolving digital landscape.
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.navigation}>
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
              <h3>London Office</h3>
              <a
                href="https://www.google.fr/maps/place/London,+UK/@51.5149089,-0.1261213,17z/data=!3m1!4b1!4m6!3m5!1s0x487604ccaaa0b0b7:0xbe144a0754857ae1!8m2!3d51.5149056!4d-0.1235464!16s%2Fg%2F11bw3y6cb_?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                <GiPositionMarker
                  style={{
                    display: "inline",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                />
                71-75 Shelton Street, Covent Garden
                <br />
                WC2H 9JQ
                <br />
                London, UK
              </a>
              <h3>Paris Office</h3>
              <a
                href="https://www.google.fr/maps/place/Rue+Alexandre+Dumas,+Paris,+France/@48.8540399,2.3921652,17z/data=!3m1!4b1!4m6!3m5!1s0x47e67275e13efc17:0x50a7a79076843f43!8m2!3d48.8540364!4d2.3947401!16s%2Fg%2F123b90rt?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                <GiPositionMarker
                  style={{
                    display: "inline",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                />
                Rue Alexendre Dumas
                <br />
                75011
                <br />
                Paris, France
              </a>
            </div>
          </div>
          <div className={styles.contact}>
            <h3>Contact</h3>
            <ul>
              <li>
                <a className={styles.phone} href="tel:+33 977 217 620">
                  <FaPhoneAlt
                    style={{
                      display: "inline",
                      fontSize: "20px",
                      marginRight: "5px",
                    }}
                  />
                  +33 977 217 620
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/made4cloud-ltd"
                  target="_blank"
                >
                  <FaLinkedin
                    style={{
                      display: "inline",
                      fontSize: "20px",
                      marginRight: "5px",
                    }}
                  />
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        Copyright © 2024{" "}
        <strong>
          <Link href={"/"}>Made4Cloud LTD</Link>
        </strong>
        . All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
