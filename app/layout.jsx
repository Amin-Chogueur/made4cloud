import "./globals.css";
import NavBar from "../componenst/home/navBar/NavBar";
import Footer from "@/componenst/footer/Footer";
import { Poppins } from "next/font/google";
import ScrollBtn from "@/componenst/scrollToTop/ScrollBtn";
import Wavy from "@/componenst/waveBackground/Wavy";
export const metadata = {
  title:
    "CloudCraze & Cloud Solutions by Made4Cloud Ltd | Leading B2B & Commerce Services",
  description:
    "Welcome to Made4Cloud Ltd, your trusted partner for CloudCraze services, B2B Commerce, Sales Cloud, Service Cloud, Experience Cloud, and more. Empower your business with tailored cloud solutions.",
  keywords: [
    "CloudCraze",
    "cloud solutions",
    "B2B Commerce",
    " Sales Cloud",
    "Service Cloud",
    "Experience Cloud",
    "Data Cloud",
    "B2C Commerce",
    "Field Service Lightning",
    "Conga",
    "Made4Cloud Ltd",
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
      <body className={poppins.className} style={{ minHeight: "100vh" }}>
        <Wavy />
        <NavBar />

        <div>{children}</div>
        <ScrollBtn />
        <Footer />
      </body>
    </html>
  );
}
