import "./globals.css";
import NavBar from "../componenst/home/navBar/NavBar";
import Footer from "@/componenst/footer/Footer";
export const metadata = {
  title: {
    default: "Next app 14 | Home page",
    template: "Next app 14 | %s ",
  },
  description: "this is the home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
