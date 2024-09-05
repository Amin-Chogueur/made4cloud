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
          <div className={styles.customShapeDividerTop1725574060}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className={styles.shapeFill}
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className={styles.shapeFill}
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className={styles.shapeFill}
              ></path>
            </svg>
          </div>
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
          <div className={styles.customShapeDividerTop1725574060}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className={styles.shapeFill}
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className={styles.shapeFill}
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className={styles.shapeFill}
              ></path>
            </svg>
          </div>
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
          <div className={styles.customShapeDividerTop1725574060}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className={styles.shapeFill}
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className={styles.shapeFill}
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className={styles.shapeFill}
              ></path>
            </svg>
          </div>
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
