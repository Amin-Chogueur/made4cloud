"use client";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import styles from "./pagination.module.css";
import { useSearchParams, useRouter } from "next/navigation";
function PaginationComponents({ url, totalBlogs, perPage = 6 }) {
  const route = useRouter();
  const searchParams = useSearchParams();
  const totalPage = Math.ceil(totalBlogs / perPage);
  const page = Number(searchParams.get("page")) || 1;
  return (
    <div className={styles.paginationContainer}>
      <div className={styles.indexPagesContainer}>
        <button
          disabled={page === 1}
          onClick={() => route.push(`${url}?page=${page - 1}`)}
        >
          <FaCircleArrowLeft style={{ margin: "auto", color: "teal" }} />
        </button>
        {[...Array(totalPage)].map((_ele, index) => (
          <p
            onClick={() => route.push(`${url}?page=${index + 1}`)}
            className={`${styles.indexPage} ${
              Number(page - 1) === index && styles.indexCurrentPage
            }`}
            key={index}
          >
            {index + 1}
          </p>
        ))}
        <button
          disabled={totalPage === page}
          onClick={() => route.push(`${url}?page=${page + 1}`)}
        >
          <FaArrowCircleRight style={{ margin: "auto", color: "teal" }} />
        </button>
      </div>
    </div>
  );
}

export default PaginationComponents;
