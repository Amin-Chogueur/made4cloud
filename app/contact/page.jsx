import styles from "./contact.module.css";
import { GiPositionMarker } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import ContactForm from "@/componenst/contactForm/ContactForm";
import { FaLinkedin } from "react-icons/fa";
export const metadata = {
  title: "Contact Made4Cloud Ltd | CloudCraze & Cloud Services Support",
  description:
    "Get in touch with Made4Cloud Ltd for expert CloudCraze, B2B Commerce, and cloud solution services. We’re here to help you with Sales Cloud, Service Cloud, and more.",
  keywords: [
    "Contact Made4Cloud Ltd",
    "CloudCraze support",
    "cloud services contact",
    " B2B Commerce",
    " Sales Cloud",
    "Service Cloud",
    " cloud solutions inquiry",
  ],
};
function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.contactContainer}>
        <div className={styles.content}>
          <h1>Reach Out and Transform with Made4Cloud</h1>
          <p>
            Have questions, or ready to embark on a digital transformation
            journey with Made4Cloud? We’re here to help! Reach out to us through
            the channels below, and let’s start a conversation about how we can
            empower your business with innovative technology solutions.
          </p>
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
                <a href="tel:+33 977 217 620">
                  <FaPhoneAlt
                    style={{
                      fontSize: "20px",
                      display: "inline",
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
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
