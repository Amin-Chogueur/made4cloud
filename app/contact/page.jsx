import styles from "./contact.module.css";
import { GiPositionMarker } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
export const metadata = {
  title: "Contact",
  description: ` Have questions, or ready to embark on a digital transformation journey with Made4Cloud? We’re here to help! Reach out to us through the channels below, and let’s start a conversation about how we can
  empower your business with innovative technology solutions.`,
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
              <p>
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
                <FaPhoneAlt
                  style={{
                    display: "inline",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                />
                +33 977 217 620
              </li>
            </ul>
          </div>
        </div>

        <form className={styles.form}>
          <input type="text" placeholder="Name..." />
          <input type="email" placeholder="Email..." required />
          <input type="text" placeholder="Phone..." />
          <textarea placeholder="Message..." required />
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
