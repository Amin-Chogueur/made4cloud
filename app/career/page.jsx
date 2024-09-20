import Link from "next/link";
import styles from "./career.module.css";

export const metadata = {
  title: "Career-Made4Cloud Ltd | CloudCraze Experts & Cloud Service Providers",
  description: `At Made4Cloud Ltd, we value innovation, collaboration, and personal growth. We’re excited to build a future together with passionate
  people.`,
  keywords: [
    "About Made4Cloud Ltd",
    "CloudCraze",
    "cloud experts",
    "B2B Commerce",
    "Sales Cloud",
    "Service Cloud",
    "cloud services provider",
  ],
};
function Career() {
  return (
    <div style={{ minHeight: "calc(100vh - 120px)", marginTop: "80px" }}>
      <div className="career-page">
        <header className={styles.careerHeader}>
          <h1>Join Our Team</h1>
          <p>
            Currently, we don`t have any open positions, but we`re always
            looking for talented individuals to connect with.
          </p>
        </header>
        <section className={styles.openPositions}>
          <h2>No Open Positions</h2>
          <div className={styles.jobListing}>
            <p>
              We encourage you to check back later if you’re interested in
              future opportunities.
            </p>
          </div>
        </section>

        <section className={styles.careerValues}>
          <h2>Why Work With Us?</h2>
          <p>
            At Made4Cloud Ltd, we value innovation, collaboration, and personal
            growth. We’re excited to build a future together with passionate
            people.
          </p>
        </section>

        <footer className={styles.careerFooter}>
          <p>
            Stay in touch! You can always <Link href="/contact">reach out</Link>{" "}
            to us directly for more information.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Career;
