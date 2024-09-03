"use client";
import { useState } from "react";
import styles from "./sideBar.module.css";
import Link from "next/link";
function SideBar() {
  const [showCategories, setShoCategories] = useState(false);
  function handleShowCategories() {
    setShoCategories((prev) => !prev);
  }

  return (
    <div className={styles.sideBar}>
      <button onClick={handleShowCategories}>Blogs Categories</button>
      {showCategories && (
        <ol>
          <li>
            <Link href={"/blog"}>All Blogs</Link>
          </li>
          <li className={styles.firstCategorie}>
            <Link href={"/blog/cloude-sf-products"}>
              <span>cloude / sf products</span>{" "}
              <span className={styles.showSub}>&darr;</span>
            </Link>
            <ul className={styles.firstSubCategorie}>
              <li>
                <Link href={"/blog/cloude-sf-products/sales"}>sales</Link>
              </li>
              <li>
                <Link href={"/blog/cloude-sf-products/filter"}>filter</Link>
              </li>
              <li>
                {" "}
                <Link href={"/blog/cloude-sf-products/B2B"}>B2B</Link>
              </li>
              <li>
                <Link href={"/blog/cloude-sf-products/services"}>services</Link>
              </li>
            </ul>
          </li>
          <li className={styles.secondCategorie}>
            <Link href={"/blog/apex"}>
              <span>apex</span> <span className={styles.showSub}>&darr;</span>
            </Link>
            <ul className={styles.secondSubCategorie}>
              <li>
                <Link href={"/blog/apex/apex-one"}>apex one</Link>
              </li>
              <li>
                <Link href={"/blog/apex/apex-two"}>apex two</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href={"/blog/LWC"}>LWC</Link>
          </li>
          <li>
            <Link href={"/blog/oracl"}>oracl</Link>
          </li>
          <li>
            <Link href={"/blog/visual-Force"}>visual force page</Link>
          </li>
          <li>
            <Link href={"/blog/SFDX"}>SFDX</Link>
          </li>
          <li>
            <Link href={"/blog/VS-Code"}>VS code extentions</Link>
          </li>
        </ol>
      )}
    </div>
  );
}

export default SideBar;
