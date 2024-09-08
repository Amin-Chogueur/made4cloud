import Wavy from "@/componenst/waveBackground/Wavy";

export const metadata = {
  title: {
    default: "Blogs",
    template: " %s - Made4Cloud LTD ",
  },
  description:
    "This is our blogs about this topics: Salesforce Admin, Lightning Web Runtime (LWR), Salesforce Developer, Apex",
};
export default function BlogsLayout({ children }) {
  return (
    <div>
      <Wavy />
      {children}
    </div>
  );
}
