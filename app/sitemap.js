import { getBlogs, getCategories } from "@/blogData/blogData";
export default async function sitemap() {
  const blogs = await getBlogs();
  const blogsUrl = blogs.map((blog) => {
    return {
      url: `https://made4cloud.com/blog/${blog.category}/${blog.id}`,
      lastModified: new Date(),
    };
  });
  const categories = await getCategories();
  const categoriesUrl = categories.map((categorie) => {
    return {
      url: `https://made4cloud.com/blog/${categorie}`,
      lastModified: new Date(),
    };
  });

  return [
    {
      url: "https://made4cloud.com/",
      lastModified: new Date(),
    },
    {
      url: "https://made4cloud.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://made4cloud.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://made4cloud.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://made4cloud.com/career",
      lastModified: new Date(),
    },
    ...blogsUrl,
    ...categoriesUrl,
  ];
}
