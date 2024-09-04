"use client";
import Image from "next/image";
import styles from "./Carousel.module.css";
import { useState } from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
const sliderData = [
  {
    id: "1",

    description:
      " Since joining our team, Anes has demonstrated an exceptional ability to quickly adapt to our structure, as well as that of my client, and to deeply understand the specifics of his role. With his capacity to grasp complex business contexts and propose innovative solutions, along with his attentive listening skills and ability to identify even the vaguest of issues, Anes has successfully combined his strengths to effectively meet our needs. His commitment to finding suitable solutions and his ability to apply his knowledge to achieve objectives are remarkable. I highly recommend him for his expertise, skills, and the added value he brings to our organization.",
    auther: "Nicolas",
    position: "Architect",
  },
  {
    id: "2",
    description:
      " Anes is a delivery expert. He can effectively manage various tasks and projects, even with limited guidance. He is a trustworthy person who works independently. ",
    auther: "Yann",
    position: "Manager",
  },
];
function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  function handleLeftBtn() {
    if (currentSlide === 0) {
      setCurrentSlide(sliderData.length - 1);
    } else {
      setCurrentSlide((pre) => pre - 1);
    }
  }
  function handleRightBtn() {
    if (currentSlide === sliderData.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((pre) => pre + 1);
    }
  }
  return (
    <div className={styles.parent}>
      <div className={styles.sliderContainer}>
        <button
          className={currentSlide === 0 ? styles.hide : " "}
          onClick={handleLeftBtn}
        >
          <FaArrowAltCircleLeft />
        </button>
        {sliderData.map((slide, i) => (
          <div
            key={i}
            className={styles.slide}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <div>
              <p className={styles.stars}>
                {[...Array(5)].map((_ele, index) => (
                  <MdOutlineStarPurple500 key={1} />
                ))}
              </p>
              <p className={styles.desc}>{slide.description}</p>
              <div>
                <p>{slide.auther}</p>
                <p>{slide.position}</p>
              </div>
            </div>
          </div>
        ))}
        <button
          className={currentSlide === sliderData.length - 1 && styles.hide}
          onClick={handleRightBtn}
        >
          <FaArrowCircleRight />
        </button>
        <div className={styles.circles}>
          {sliderData.map((slide, i) => (
            <span
              key={i}
              className={
                currentSlide === i ? styles.showCercle : styles.hideCurcle
              }
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
