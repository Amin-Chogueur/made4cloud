import { getBlogs, getCategories } from "@/blogData/blogData";
export default async function sitemap() {
  const blogs = await getBlogs();
  const blogsUrl = blogs.map((blog) => {
    return {
      url: `https://made4cloud.vercel.app/blog/${blog.category}/${blog.id}`,
      lastModified: new Date(),
    };
  });
  const categories = await getCategories();
  const categoriesUrl = categories.map((categorie) => {
    return {
      url: `https://made4cloud.vercel.app/blog/${categorie}`,
      lastModified: new Date(),
    };
  });

  return [
    {
      url: "https://made4cloud.vercel.app/",
      lastModified: new Date(),
    },
    ...blogsUrl,
    ...categoriesUrl,
  ];
}
