"use client";
import { useState } from "react";
import styles from "./sideBar.module.css";
import Link from "next/link";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { categories } from "@/blogData/blogData";
function SideBar() {
  const [showCategories, setShoCategories] = useState(false);
  function handleShowCategories() {
    setShoCategories((prev) => !prev);
  }

  return (
    <>
      <div className={styles.sideBar}>
        <div className={styles.sticky}>
          <h2>Blogs Categories</h2>
          {
            <ol>
              <li>
                <Link href={"/blog"}>All Blogs</Link>
              </li>
              {categories.map((category, i) => (
                <li key={i}>
                  <Link href={`/blog/${category}`}>
                    {category.replace(/-/g, " ")}
                  </Link>
                </li>
              ))}
            </ol>
          }
        </div>
      </div>

      <div className={styles.sideBarPhone}>
        <button onClick={handleShowCategories}>
          Blogs Categories
          <MdKeyboardDoubleArrowDown style={{ margin: "auto" }} />
        </button>

        {showCategories && (
          <ol>
            <li>
              <Link href={"/blog"}>All Blogs</Link>
            </li>
            {categories.map((category, i) => (
              <li key={i}>
                <Link href={`/blog/${category}`}>
                  {category.replace(/-/g, " ")}
                </Link>
              </li>
            ))}
          </ol>
        )}
      </div>
    </>
  );
}

export default SideBar;
