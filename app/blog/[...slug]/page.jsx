import Link from "next/link";
import styles from "./slug.module.css";
import { redirect } from "next/navigation";
import SideBar from "@/componenst/blog/sideBar/SideBar";
import Image from "next/image";
import {
  getSinglePost,
  getRelatedPost,
  getCategorie,
} from "@/blogData/blogData";
import PaginationComponents from "@/componenst/pagination/PaginationComponents";
import GetInTouch from "@/componenst/getInTouch/GetInTouch";
import { categories } from "@/blogData/blogData";

export async function generateMetadata({ params }) {
  const { slug } = params;

  let metadata = {};

  if (slug.length === 1) {
    // Generate metadata for category page
    const categorie = params.slug[0].replace(/-/g, " ");
    metadata = {
      title: `${categorie} `,
    };
  } else if (slug.length === 2) {
    const categorie = params.slug[0].replace(/-/g, " ");
    const id = params.slug[1];
    const data = await getSinglePost(id);
    metadata = {
      title: `${data?.title} - ${categorie} `,
    };
  }
  return metadata;
}

async function Blog({ params, searchParams }) {
  const perPage = 6;
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
      <>
        <div className={styles.backgroundDiv}>
          <div className={`${styles.container} ${styles.containerSingleBlog}`}>
            <SideBar className={styles.sideBar} />
            <div className={`${styles.slugContainer} ${styles.slugPost}`}>
              <div className={styles.singleBlog}>
                <p className={styles.category}>{data.category}</p>
                <div className={styles.imageBigContainer}>
                  {" "}
                  <Image fill src={data.image} alt={data.title} />
                </div>
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
                      <p className={styles.category}>{item.category}</p>
                      <div className={styles.imageContainer}>
                        {" "}
                        <Image fill src={item.image} alt={item.title} />
                      </div>
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
                        href={`/blog/${categorie.replace(/ /g, "-")}/${
                          item.id
                        }`}
                      >
                        READ ALL
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <GetInTouch />
      </>
    );
  }

  if (params.slug.length === 1) {
    const categorie = params.slug[0].replace(/-/g, " ");
    const { dataLength, data } = await getCategorie(categorie, page, perPage);
    if (data.length === 0) {
      redirect("/blog");
    }
    return (
      <>
        <div className={styles.container}>
          <SideBar className={styles.sideBar} />
          <div className={styles.slugContainer}>
            <h2> {categorie}</h2>
            <div className={styles.allBlogs}>
              {data.map((item) => (
                <div className={styles.blog} key={item.id}>
                  <p className={styles.category}>
                    {item.category} / {item.subCategory}
                  </p>
                  <div className={styles.imageContainer}>
                    {" "}
                    <Image fill src={item.image} alt={item.title} />
                  </div>
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
          perPage={perPage}
        />
        <GetInTouch />
      </>
    );
  }
}

export default Blog;
