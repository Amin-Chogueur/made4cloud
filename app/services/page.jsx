import AboutFirst from "@/componenst/aboutComponents/aboutFirstSection/AboutFirst";
import GetInTouch from "@/componenst/getInTouch/GetInTouch";
import { cardContent } from "@/componenst/development-services/Development";
export const metadata = {
  title: "Services",
  description:
    "Our Services : Sales Cloud, Service Cloud, Experience Cloud, B2B commerce Cloud, CloudCraze, B2C Commerce Cloud, Field Service Lightning, Conga",
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
