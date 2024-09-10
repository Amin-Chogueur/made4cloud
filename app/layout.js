import "./globals.css";
import NavBar from "../componenst/home/navBar/NavBar";
import Footer from "@/componenst/footer/Footer";
import { Poppins } from "next/font/google";
import ScrollBtn from "@/componenst/scrollToTop/ScrollBtn";
import Wavy from "@/componenst/waveBackground/Wavy";
export const metadata = {
  title: {
    default:
      "Home - Made4Cloud LTD, CloudCraze Solutions | Expert Cloud E-Commerce Services",
    template:
      "%s - Made4Cloud LTD, CloudCraze Solutions | Expert Cloud E-Commerce Services",
  },
  description:
    "Leading CloudCraze solutions provider offering expert e-commerce services for seamless Salesforce integrations and scalable cloud architectures.",
  keywords: [
    "CloudCraze",
    "Salesforce e-commerce",
    "cloud solutions",
    "cloud integration",
    "B2B commerce",
    "scalable e-commerce",
    "cloud platform",
    "digital transformation",
    "cloud architecture",
    "sales Cloud",
    "Service Cloud",
    "Experience Cloud",
    "B2C Commerce Cloud",
    "Field Service Lightning",
    "Conga",
  ],
  author: "Made4Cloud LTD",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "CloudCraze Solutions | Expert Cloud E-Commerce Services",
    description:
      "Leading CloudCraze solutions provider offering expert e-commerce services for seamless Salesforce integrations and scalable cloud architectures.",
    url: "https://www.made4cloud.com/",
    images: [
      {
        url: "https://www.made4cloud.com/images/made4cloudLogo.png",
        alt: "Made4Cloud LTD Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudCraze Solutions | Expert Cloud E-Commerce Services",
    description:
      "Leading CloudCraze solutions provider offering expert e-commerce services for seamless Salesforce integrations and scalable cloud architectures.",
    images: [
      {
        url: "https://www.made4cloud.com/images/made4cloudLogo.png",
        alt: "Made4Cloud LTD  Twitter Logo",
      },
    ],
  },
};

// Load the font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"], // Specify the font weights you need
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Wavy />
        <NavBar />

        <div>{children}</div>
        <ScrollBtn />
        <Footer />
      </body>
    </html>
  );
}
