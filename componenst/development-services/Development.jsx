import Card from "./card/Card";
import styles from "./development.module.css";
const cardContent = [
  {
    title: "Saas Solutions",
    image: "/images/c1.jpg",
    description:
      "Elevate your online presence with bespoke Saas websites developed using state-of-the-art technologies such as Microsoft, Java, and Javascript.",
  },
  {
    title: "Website Development",
    image: "/images/c2.jpg",
    description:
      "Harness the power of the web with dynamic websites built on Facbook, React JS, Next JS, NodeJS, Express JS and other cutting-edge platforms.",
  },
  {
    title: "Solution Migration",
    image: "/images/c3.jpg",
    description:
      "Seamlessly transition your systems with our expertise in solution migration, including data migration strategies.",
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
