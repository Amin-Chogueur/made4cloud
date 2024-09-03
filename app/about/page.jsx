import AboutFirst from "@/componenst/aboutComponents/aboutFirstSection/AboutFirst";
import Founder from "@/componenst/aboutComponents/founder/Founder";

import Version from "@/componenst/aboutComponents/version/Version";
import GetInTouch from "@/componenst/getInTouch/GetInTouch";
const aboutData = [
  {
    title: "Pulstech Transforming Tomorrow Since 2024",
    description:
      "Welcome to Pulstech, where innovation meets technology.Established in 2022 in the heart of Paris, we`ve been on a relentless journey, pioneering digital solutions that define the future.",
    buttonContent: "Get Started!",
    image: "/images/about1.jpg",
  },
  {
    title: "Culture and Values",
    description:
      "Welcome to Pulstech, where innovation meets technology. Established in 2022 in the heart of Paris, we've been on a relentless journey, pioneering digital solutions that define the future.",
    buttonContent: "Join the dream team!",
    image: "/images/about2.jpg",
  },
];
function About() {
  return (
    <div>
      <AboutFirst data={aboutData[0]} />
      <Version />
      <Founder />
      <AboutFirst data={aboutData[1]} />
      <GetInTouch />
    </div>
  );
}

export default About;
