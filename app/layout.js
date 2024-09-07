import "./globals.css";
import NavBar from "../componenst/home/navBar/NavBar";
import Footer from "@/componenst/footer/Footer";
import { Poppins } from "next/font/google";
import ScrollBtn from "@/componenst/scrollToTop/ScrollBtn";
export const metadata = {
  title: {
    default: "Home - Made4Cloud",
    template: "%s - Made4Cloud  ",
  },
  description:
    "We're dedicated to driving tangible results for our clients, as evidenced by our proven track record of successful Salesforce implementations and customizations.",
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
        <NavBar />

        <div>{children}</div>
        <Footer />
        <ScrollBtn />
      </body>
    </html>
  );
}
