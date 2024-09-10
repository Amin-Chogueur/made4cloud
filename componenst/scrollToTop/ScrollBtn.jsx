"use client";
import { useState, useEffect } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
import styles from "./scrollBtn.module.css";
function ScrollBtn() {
  const [isScrolled, setIsScrolled] = useState(false);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleScroll() {
    if (window.scrollY >= 170) {
      setIsScrolled(true);
    }
    if (window.scrollY <= 170) {
      setIsScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <button
        className={isScrolled ? styles.scrollBtnContainer : styles.hide}
        onClick={scrollToTop}
      >
        <FaCircleArrowUp />
      </button>
    </div>
  );
}

export default ScrollBtn;
