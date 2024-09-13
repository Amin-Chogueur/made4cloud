import Card from "./card/Card";
import styles from "./development.module.css";
export const cardContent = [
  {
    id: "1",
    title: "CloudCraze",
    image:
      "https://www.walkersands.com/wp-content/uploads/2019/11/47fcb3e1-b8de-4276-a388-1381ae4493a4.png",
    description:
      " We provide expertise in evolving CloudCraze implementations, resolving bugs, and facilitating smooth transitions to the B2B Lightning platform.",
    buttonContent: "Get Started!",
    directionStyles: "left",
  },
  {
    id: "2",
    title: "Sales Cloud ",
    image:
      "https://www.salesforce.com/content/dam/web/global/svg-icons/service-day.svg",
    description:
      "Empowers sales teams with a 360-degree view of customers, automates tasks to improve efficiency, and provides insights to close more deals.",
    buttonContent: "Get Started!",
  },
  {
    id: "3",
    title: "B2B commerce Cloud",
    image:
      "https://www.salesforce.com/content/dam/web/global/svg-icons/commerce-day.svg",
    description:
      " Integrates with Sales Cloud, providing sales reps with real-time visibility into customer orders, purchase history, and preferences, enabling them to tailor their sales approach.",
    buttonContent: "Get Started!",
    directionStyles: "left",
  },
  {
    id: "4",
    title: "Service Cloud",
    image:
      "https://www.salesforce.com/content/dam/web/global/svg-icons/sales-day.svg",
    description:
      "Helps sales professionals by providing visibility into customer support history, identifying upsell and cross-sell opportunities, and fostering customer loyalty, which can lead to repeat business.",
    buttonContent: "Get Started!",
  },
  {
    id: "5",
    title: "Experience Cloud",
    image: "https://vectorified.com/images/salesforce-cloud-icon-16.png",
    description:
      " Create personalized portals for prospects and customers, share relevant content, accelerate the sales process, and improve customer engagement.",
    buttonContent: "Get Started!",
    directionStyles: "left",
  },

  {
    id: "6",
    title: "B2C Commerce Cloud",
    image:
      "https://www.salesforce.com/content/dam/web/global/svg-icons/commerce-day.svg",
    description:
      " While primarily focused on the online shopping experience, B2C Commerce Cloud data can provide insights into consumer behavior and preferences, which sales teams can leverage for targeted marketing and sales efforts.",

    buttonContent: "Get Started!",
  },
  {
    id: "7",
    title: "Conga",
    image:
      "https://vectorseek.com/wp-content/uploads/2023/08/Conga.-Logo-Vector.svg-.png",
    description:
      "Configuring Conga sign and composer to align with your specific document templates, data fields, and business processes.",
    buttonContent: "Get Started!",
    directionStyles: "left",
  },
  {
    id: "8",
    title: "Field Service Lightning",
    image:
      "https://play-lh.googleusercontent.com/5ebpO0x3iKOPYL5r2S6TXS6UPITF2B9eMMEuo4x7kvbbuYXZObVbxDUu9U1WBIjqQw",
    description:
      "Improve customer satisfaction and efficiency with our Field Service solutions. Technicians get real-time access to customer info, work orders, and inventory, while automated scheduling ensures timely job assignments. Mobile tools enable job updates, signatures, and invoicing for faster service and better customer experiences.",
    buttonContent: "Get Started!",
  },
  {
    id: "9",
    title: "Data Cloud",
    image:
      "https://www.salesforce.com/content/dam/web/global/svg-icons/placeholder29.svg",
    description:
      "We specialize in Salesforce Data Cloud integration, unifying your data sources for enhanced insights and decision-making. Our solutions enable real-time analysis, predictive modeling, and personalized customer experiences, driving growth and operational efficiency.",
    buttonContent: "Get Started!",
    directionStyles: "left",
  },
  {
    id: "10",
    title: "Slack",
    image:
      "https://www.salesforce.com/content/dam/web/global/svg-icons/placeholder13.svg",
    description:
      "Our Slack integration services for Salesforce boost collaboration and productivity. We create custom integrations that connect your CRM with team communications, enabling real-time updates, automated notifications, and instant access to customer information within Slack, improving teamwork and customer satisfaction.",
    buttonContent: "Get Started!",
  },
  {
    id: "11",
    title: "Guidewire",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.MBQ5_Uy6u-ZluYOmHmU4mQHaHa&pid=Api&P=0&h=180",
    description:
      "Leverage our expertise in implementing Guidewire ClaimCenter and PolicyCenter to streamline your insurance operations. We provide custom development, seamless integration, and tailored solutions to enhance your claims and policy management systems. Our services ensure fast deployment, optimized workflows, and future-ready platforms, helping your business achieve operational excellence.",
    buttonContent: "Get Started!",
    directionStyles: "left",
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
