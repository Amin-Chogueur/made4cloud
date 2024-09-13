import Development from "../development-services/Development";
import GetInTouch from "../getInTouch/GetInTouch";
import OurPartners from "../our-partners/OurPartners";
import Testimeniel from "../testimeniel/Testimeniel";

import Hero from "./hero/Hero";

function HomePage() {
  return (
    <div>
      <Hero />

      <OurPartners />

      <Development />
      <Testimeniel />
      <GetInTouch />
    </div>
  );
}

export default HomePage;
