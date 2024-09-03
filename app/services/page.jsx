import AboutFirst from "@/componenst/aboutComponents/aboutFirstSection/AboutFirst";
import Development from "@/componenst/development-services/Development";
import GetInTouch from "@/componenst/getInTouch/GetInTouch";
const servicesData = [
  {
    title: "Empower Your Business with Pulstech's Dynamic Services Suite",
    description:
      "At Pulstech, we offer a comprehensive suite of services designed to propel your business into the digital future. Our diverse range of offerings is crafted with precision, backed by expertise, and tailored to meet the unique needs of each client.",
    buttonContent: "Get Started!",
    image: "/images/services1.jpg",
  },
  {
    title: "Change Management",
    description:
      "Managing change is an integral part of success. At Pulstech, we guide your team and organization through change, fostering adaptability and resilience in dynamic environments.",
    image: "/images/services2.jpg",
    buttonContent: "Get Started!",
    directionStyles: "left",
  },
  {
    title: "Third-Party Application Maintenance",
    description:
      "Ensure the longevity and efficiency of your applications with our Third-Party Application Maintenance services. We go beyond development, providing dedicated support for continued success.",
    image: "/images/services3.jpg",
    buttonContent: "Get Started!",
  },
  {
    title: "DevOps Solutions",
    description:
      "Streamline collaboration and boost efficiency with Pulstech's DevOps services. Our integrated approach accelerates development, ensuring quick delivery and top-notch software quality.",
    image: "/images/services4.jpg",
    buttonContent: "Get Started!",
    directionStyles: "left",
  },
];
function Services() {
  return (
    <div>
      <AboutFirst data={servicesData[0]} />
      <Development />
      <AboutFirst data={servicesData[1]} />
      <AboutFirst data={servicesData[2]} />
      <AboutFirst data={servicesData[3]} />
      <GetInTouch />
    </div>
  );
}

export default Services;
