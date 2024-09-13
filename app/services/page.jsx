import AboutFirst from "@/componenst/aboutComponents/aboutFirstSection/AboutFirst";
import GetInTouch from "@/componenst/getInTouch/GetInTouch";
import { cardContent } from "@/componenst/development-services/Development";
export const metadata = {
  title:
    "CloudCraze & Cloud Services by Made4Cloud Ltd | B2B, Sales, Service, Experience Cloud",
  description:
    "Explore Made4Cloud Ltd's full range of services, including CloudCraze for B2B Commerce, Slack integrations, Data Cloud, Sales Cloud, Service Cloud, and Conga, Guidewire. Your one-stop solution for cloud-based business management.",
  keywords: [
    "CloudCraze services",
    "B2B Commerce",
    " Data Cloud",
    "Sales Cloud",
    "Service Cloud",
    "Experience Cloud",
    "B2C Commerce",
    "Conga",
    "Field Service Lightning",
    "cloud solutions",
    "Guidewire",
  ],
};
function Services() {
  return (
    <div>
      <h1
        style={{
          marginTop: "100px",
          textAlign: "center",
          color: "var(--main)",
          fontSize: "45px",
          fontWeight: "800",
        }}
      >
        Our Services
      </h1>
      {cardContent.map((card, i) => {
        return <AboutFirst key={i} data={card} />;
      })}
      <GetInTouch />
    </div>
  );
}

export default Services;
