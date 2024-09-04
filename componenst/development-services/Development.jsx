import Card from "./card/Card";
import styles from "./development.module.css";
export const cardContent = [
  {
    title: "Sales Cloud ",
    image: "/images/c1.jpg",
    description:
      "Empowers sales teams with a 360-degree view of customers, automates tasks to improve efficiency, and provides insights to close more deals.",
    buttonContent: "Get Started!",
  },
  {
    title: "Service Cloud",
    image: "/images/c2.jpg",
    description:
      "Helps sales professionals by providing visibility into customer support history, identifying upsell and cross-sell opportunities, and fostering customer loyalty, which can lead to repeat business.",
    buttonContent: "Get Started!",
    directionStyles: "left",
  },
  {
    title: "Experience Cloud",
    image: "/images/c3.jpg",
    description:
      " Create personalized portals for prospects and customers, share relevant content, accelerate the sales process, and improve customer engagement.",
    buttonContent: "Get Started!",
  },
  {
    title: "B2B commerce Cloud",
    image: "/images/c4.jpg",
    description:
      " Integrates with Sales Cloud, providing sales reps with real-time visibility into customer orders, purchase history, and preferences, enabling them to tailor their sales approach.",
    buttonContent: "Get Started!",
    directionStyles: "left",
  },
  {
    title: "CloudCraze",
    image: "/images/c5.jpg",
    description:
      " We provide expertise in evolving CloudCraze implementations, resolving bugs, and facilitating smooth transitions to the B2B Lightning platform.",
    buttonContent: "Get Started!",
  },
  {
    title: "B2C Commerce Cloud",
    image: "/images/c6.jpg",
    description:
      " While primarily focused on the online shopping experience, B2C Commerce Cloud data can provide insights into consumer behavior and preferences, which sales teams can leverage for targeted marketing and sales efforts.",
    directionStyles: "left",
    buttonContent: "Get Started!",
  },
  {
    title: "Conga",
    image: "/images/c1.jpg",
    description:
      "Configuring Conga sign and composer to align with your specific document templates, data fields, and business processes.",
    buttonContent: "Get Started!",
  },
];
function Development() {
  return (
    <div className={styles.developmentContainer}>
      <div className={styles.cards}>
        <h2>Development Services</h2>
        <div className={styles.cardContainer}>
          {cardContent.map((content, i) => (
            <Card key={i} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Development;
