import AboutFirst from "@/componenst/aboutComponents/aboutFirstSection/AboutFirst";
import Founder from "@/componenst/aboutComponents/founder/Founder";
import AboutDesc from "@/componenst/aboutDescription/AboutDesc";
import Version from "@/componenst/aboutComponents/version/Version";
import GetInTouch from "@/componenst/getInTouch/GetInTouch";

export const metadata = {
  title: "About Made4Cloud Ltd | CloudCraze Experts & Cloud Service Providers",
  description:
    "Learn about Made4Cloud Ltd, a leading provider of CloudCraze and cloud-based business solutions, specializing in B2B Commerce, Sales Cloud, Service Cloud, and more.",
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
const aboutData = [
  {
    title: "Made4Cloud Transforming Tomorrow Since 2019",
    description:
      "We're dedicated to driving tangible results for our clients, as evidenced by our proven track record of successful Salesforce implementations and customizations.",
    buttonContent: "Get Started!",
    image:
      "https://www.salesforceben.com/wp-content/uploads/2024/09/Artboard-6-copy-3.jpg",
  },
  {
    title: "Culture and Values",
    image: "/images/holi.png",
    description:
      "Welcome to Made4Cloud, where innovation meets technology. Established in 2022 in the heart of Paris, we've been on a relentless journey, pioneering digital solutions that define the future.",
    buttonContent: "Join the dream team!",
    link: "/career",
    directionStyles: "left",
  },
];

function About() {
  return (
    <div>
      <AboutDesc data={aboutData[0]} />
      <Version />
      <Founder />
      <AboutFirst data={aboutData[1]} />
      <GetInTouch />
    </div>
  );
}

export default About;
