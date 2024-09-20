// Ensure dynamic rendering for this page
export const dynamic = "force-dynamic"; // Ensures the page is rendered dynamically

import Link from "next/link";
import styles from "./slug.module.css";
import { redirect } from "next/navigation";
import SideBar from "@/componenst/blog/sideBar/SideBar";
import Image from "next/image";
import {
  getSinglePost,
  getRelatedPost,
  getCategorie,
  getBlogs,
} from "@/blogData/blogData";
import PaginationComponents from "@/componenst/pagination/PaginationComponents";
import GetInTouch from "@/componenst/getInTouch/GetInTouch";

export async function generateMetadata({ params }) {
  const { slug } = params;

  let metadata = {};

  if (slug.length === 1) {
    const categorie = params.slug[0].replace(/-/g, " ");
    metadata = {
      title: `${categorie} blog made by Made4Cloud LTD`,
      description: `Learn more about ${categorie} with Made4Cloud LTD `,
    };
  } else if (slug.length === 2) {
    const categorie = params.slug[0].replace(/-/g, " ");
    const id = params.slug[1];
    const data = await getSinglePost(id);
    metadata = {
      title: `${data.title} - ${categorie} `,
      description: `In this blog you will learn more about ${data.title} `,
    };
  }
  return metadata;
}

export async function generateStaticParams() {
  try {
    const blogPosts = await getBlogs();
    return blogPosts.map((post) => ({
      slug: [post.category.replace(/ /g, "-"), post.id],
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function Blog({ params, searchParams }) {
  const page = searchParams.page;

  if (params.slug.length === 2) {
    const categorie = params.slug[0].replace(/-/g, " ");
    const id = params.slug[1];
    const data = await getSinglePost(id);
    const relatedData = await getRelatedPost(categorie, id);

    if (!data) {
      redirect(`/blog/${categorie}`);
    }

    return (
      <div className={styles.backgroundDiv}>
        <div className={`${styles.container} ${styles.containerSingleBlog}`}>
          <SideBar />
          <div className={`${styles.slugContainer} ${styles.slugPost}`}>
            <div className={styles.singleBlog}>
              <div className={styles.imageBigContainer}>
                <h3 className={styles.titleOverLay}>{data.title}</h3>
                <Image fill src={"/images/blogPicture2.png"} alt={data.title} />
              </div>
              <p className={styles.category}>{data.category}</p>
              <h3 className={styles.title}>{data.title}</h3>
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
              <span>
                {data.author} / {data.date}
              </span>
            </div>

            <div className={styles.relatedPost}>
              {relatedData.length > 0 && <h2>Other Related Topic</h2>}
              <div>
                {relatedData?.map((item) => (
                  <div className={styles.blog} key={item.id}>
                    <div className={styles.imageContainer}>
                      <h3 className={styles.titleOverLay}>{item.title}</h3>
                      <Image
                        fill
                        src={"/images/blogPicture2.png"}
                        alt={item.title}
                      />
                    </div>
                    <p className={styles.category}>{item.category}</p>
                    <h3>{item.title}</h3>
                    <div
                      className={styles.description}
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                    <span>
                      {item.author} / {item.date}
                    </span>
                    <Link
                      className={styles.readAllLink}
                      href={`/blog/${categorie.replace(/ /g, "-")}/${item.id}`}
                    >
                      READ ALL
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <GetInTouch />
      </div>
    );
  }

  if (params.slug.length === 1) {
    const categorie = params.slug[0].replace(/-/g, " ");
    const { dataLength, data } = await getCategorie(categorie, page);

    if (data.length === 0) {
      redirect("/blog");
    }

    return (
      <>
        <div className={styles.container}>
          <SideBar />
          <div className={styles.slugContainer}>
            <h1>{categorie}</h1>
            <div className={styles.allBlogs}>
              {data.map((item) => (
                <div className={styles.blog} key={item.id}>
                  <div className={styles.imageContainer}>
                    <h3 className={styles.titleOverLay}>{item.title}</h3>
                    <Image
                      fill
                      src={"/images/blogPicture2.png"}
                      alt={item.title}
                    />
                  </div>
                  <p className={styles.category}>{item.category}</p>
                  <h3>{item.title}</h3>
                  <div
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                  <span>
                    {item.author} / {item.date}
                  </span>
                  <Link
                    className={styles.readAllLink}
                    href={`/blog/${categorie.replace(/ /g, "-")}/${item.id}`}
                  >
                    READ ALL
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <PaginationComponents
          url={`/blog/${categorie.replace(/ /g, "-")}`}
          totalBlogs={dataLength}
        />
        <GetInTouch />
      </>
    );
  }
}
