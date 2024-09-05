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
              <p>
                <GiPositionMarker
                  style={{ display: "inline", fontSize: "20px" }}
                />
                71-75 Shelton Street, Covent Garden
                <br />
                WC2H 9JQ
                <br />
                London
              </p>
              <h3>Paris Office</h3>
              <p>
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
                Paris
              </p>
            </div>
          </div>
          <div className={styles.contact}>
            <h3>Contact</h3>
            <ul>
              <li>
                {" "}
                <FaPhoneAlt
                  style={{
                    display: "inline",
                    marginRight: "5px",
                    fontSize: "20px",
                  }}
                />{" "}
                +33 977 217 620
              </li>
              <li>
                <IoLogoFacebook
                  style={{
                    display: "inline",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                />
                Facebook
              </li>
              <li>
                <FaLinkedin
                  style={{
                    display: "inline",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                />
                Linkedin
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        Copyright © 2024 <strong>Made4Cloud</strong>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
