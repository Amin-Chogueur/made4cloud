import styles from "./blog.module.css";
import Link from "next/link";
import { getData, getAllData } from "@/blogData/blogData";
import SideBar from "@/componenst/blog/sideBar/SideBar";
import Image from "next/image";
import GetInTouch from "@/componenst/getInTouch/GetInTouch";
import PaginationComponents from "@/componenst/pagination/PaginationComponents";

export default async function Blog({ searchParams }) {
  const page = searchParams.page;
  const perPage = 6;
  const totalBlogs = await getAllData();

  let data = await getData({ page, perPage });
  return (
    <>
      <div className={styles.container}>
        <SideBar className={styles.sideBar} />

        <main className={styles.mainSection}>
          <h2 className={styles.blogsTitle}>All Blogs </h2>
          <div className={styles.allBlogs}>
            {data.map((data) => (
              <div className={styles.blog} key={data.id}>
                <p className={styles.category}>{data.category}</p>

                <div className={styles.imageContainer}>
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
                <Link
                  className={styles.readAllLink}
                  href={`/blog/${data.category.replace(/ /g, "-")}/${data.id}`}
                >
                  READ ALL
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
      <PaginationComponents
        url={"/blog"}
        totalBlogs={totalBlogs}
        perPage={perPage}
      />
      <GetInTouch />
    </>
  );
}
