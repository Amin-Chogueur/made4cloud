"use client";

import styles from "./Carousel.module.css";
import { useState } from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Image from "next/image";
const sliderData = [
  {
    id: "1",
    image: "/images/nicolas.png",
    description:
      " Since joining our team, Anes has demonstrated an exceptional ability to quickly adapt to our structure, as well as that of my client, and to deeply understand the specifics of his role. With his capacity to grasp complex business contexts and propose innovative solutions, along with his attentive listening skills and ability to identify even the vaguest of issues, Anes has successfully combined his strengths to effectively meet our needs. His commitment to finding suitable solutions and his ability to apply his knowledge to achieve objectives are remarkable. I highly recommend him for his expertise, skills, and the added value he brings to our organization.",
    auther: "Nicolas",
    position: "Architect",
  },
  {
    id: "2",
    image: "/images/yann.png",
    description:
      " Anes is a delivery expert. He can effectively manage various tasks and projects, even with limited guidance. He is a trustworthy person who works independently. ",
    auther: "Yann",
    position: "Manager",
  },
];
function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  function handleLeftBtn() {
    setCurrentSlide((pre) => pre - 1);
  }
  function handleRightBtn() {
    if (currentSlide === sliderData.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((pre) => pre + 1);
    }
  }
  return (
    <div className={styles.sliderContainer}>
      <button onClick={handleLeftBtn}>
        <FaArrowAltCircleLeft
          className={currentSlide === 0 ? styles.hide : styles.arrow}
        />
      </button>
      {sliderData.map((slide, i) => (
        <div
          key={i}
          className={styles.slide}
          style={{ transform: `translateX(-${currentSlide * 101}%)` }}
        >
          <div className={styles.content}>
            <div className={styles.autherInfo}>
              <Image
                src={slide.image}
                width={70}
                height={70}
                alt={slide.auther}
              />
              <div>
                <p>{slide.auther}</p>
                <p className={styles.stars}>
                  {[...Array(5)].map((_ele, index) => (
                    <MdOutlineStarPurple500
                      key={index}
                      style={{ color: "orange" }}
                    />
                  ))}
                </p>
                <p>{slide.position}</p>
              </div>
            </div>
            <p className={styles.desc}>{slide.description}</p>
          </div>
        </div>
      ))}
      <button
        className={
          currentSlide === sliderData.length - 1 ? styles.hide : styles.arrow
        }
        onClick={handleRightBtn}
      >
        <FaArrowCircleRight />
      </button>
    </div>
  );
}

export default Carousel;
