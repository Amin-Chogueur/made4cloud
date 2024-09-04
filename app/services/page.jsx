import AboutFirst from "@/componenst/aboutComponents/aboutFirstSection/AboutFirst";
import GetInTouch from "@/componenst/getInTouch/GetInTouch";
import { cardContent } from "@/componenst/development-services/Development";

function Services() {
  return (
    <div style={{ marginTop: "50px" }}>
      {cardContent.map((card, i) => {
        return <AboutFirst key={i} data={card} />;
      })}
      <GetInTouch />
    </div>
  );
}

export default Services;
