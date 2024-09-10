import Wavy from "@/componenst/waveBackground/Wavy";

export const metadata = {
  title: {
    default: "Blogs ",
    template:
      " %s - Made4Cloud LTD, CloudCraze Solutions | Expert Cloud E-Commerce Services",
  },
};
export default function BlogsLayout({ children }) {
  return (
    <div>
      <Wavy />
      {children}
    </div>
  );
}
