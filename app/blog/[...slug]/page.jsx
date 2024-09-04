import Link from "next/link";
import styles from "./slug.module.css";
import SideBar from "@/componenst/blog/sideBar/SideBar";
import Image from "next/image";
import {
  getSinglePost,
  getRelatedPost,
  getSubCategorie,
  getCategorie,
} from "@/blogData/blogData";
import PaginationComponents from "@/componenst/pagination/PaginationComponents";
import GetInTouch from "@/componenst/getInTouch/GetInTouch";

async function Blog({ params, searchParams }) {
  const perPage = 6;
  const page = searchParams.page;
  if (params.slug.length === 3) {
    const categorie = params.slug[0].replace(/-/g, " ");
    const subCategorie = params.slug[1].replace(/-/g, " ");
    const id = params.slug[2];
    const data = await getSinglePost(id);
    const relatedData = await getRelatedPost(categorie, id);

    return (
      <>
        <div className={styles.container}>
          <SideBar className={styles.sideBar} />
          <div className={`${styles.slugContainer} ${styles.slugPost}`}>
            <div className={styles.singleBlog}>
              <p className={styles.category}>
                {data.category} / {data.subCategory}
              </p>
              <div className={styles.imageBigContainer}>
                {" "}
                <Image fill src={data.image} alt={data.title} />
              </div>
              <h3 className={styles.title}>{data.title}</h3>
              <p> {data.description}</p>
              <span>
                {data.author} / {data.date}
              </span>
            </div>
            <div className={styles.relatedPost}>
              <h2>Others Related Topic</h2>
              <div>
                {relatedData?.map((item) => (
                  <div className={styles.blog} key={item.id}>
                    <p className={styles.category}>
                      {item.category} / {item.subCategory}
                    </p>
                    <div className={styles.imageContainer}>
                      {" "}
                      <Image fill src={item.image} alt={item.title} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span>
                      {item.author} / {item.date}
                    </span>
                    <Link
                      className={styles.readAllLink}
                      href={`/blog/${categorie.replace(
                        / /g,
                        "-"
                      )}/${subCategorie.replace(/ /g, "-")}/${item.id}`}
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
      </>
    );
  }
  ///////////////////////
  if (params.slug.length === 2) {
    const categorie = params.slug[0].replace(/-/g, " ");
    const subCategorie = params.slug[1].replace(/-/g, " ");
    const { dataLength, data } = await getSubCategorie(
      subCategorie,
      page,
      perPage
    );
    return (
      <>
        <div className={styles.container}>
          <SideBar className={styles.sideBar} />
          <div className={styles.slugContainer}>
            <h2>
              {" "}
              {categorie} {` / ${subCategorie}`}
            </h2>
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
                  <p>{item.description}</p>
                  <span>
                    {item.author} / {item.date}
                  </span>
                  <Link
                    className={styles.readAllLink}
                    href={`/blog/${categorie.replace(
                      / /g,
                      "-"
                    )}/${subCategorie.replace(/ /g, "-")}/${item.id}`}
                  >
                    READ ALL
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <PaginationComponents
          url={`/blog/${categorie.replace(/ /g, "-")}/${subCategorie.replace(
            / /g,
            "-"
          )}`}
          totalBlogs={dataLength}
          perPage={perPage}
        />
        <GetInTouch />
      </>
    );
  }
  ///////////////////////////////
  if (params.slug.length === 1) {
    const categorie = params.slug[0].replace(/-/g, " ");
    const { dataLength, data } = await getCategorie(categorie, page, perPage);

    /*const subCat = [
      ...new Set(
        data
          .filter((item) => item.hasOwnProperty("subCategory"))
          .map((item) => item.subCategory)
      ),
    ];*/
    return (
      <>
        <div className={styles.container}>
          <SideBar className={styles.sideBar} />
          <div className={styles.slugContainer}>
            <h2> {categorie}</h2>
            {/*<ul className={styles.subCategorieLinks}>
            {subCat.map((cat) => (
              <li key={cat.id}>
                <Link
                  href={`/blog/${categorie.replace(/ /g, "-")}/${cat.replace(
                    / /g,
                    "-"
                  )}`}
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>*/}
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
                  <p>{item.description}</p>
                  <span>
                    {item.author} / {item.date}
                  </span>
                  <Link
                    className={styles.readAllLink}
                    href={`/blog/${categorie.replace(/ /g, "-")}/${
                      item.subCategory?.replace(/ /g, "-")
                        ? item.subCategory?.replace(/ /g, "-")
                        : "no-subcategory"
                    }/${item.id}`}
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
