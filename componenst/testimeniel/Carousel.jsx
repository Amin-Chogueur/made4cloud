"use client";
import Image from "next/image";
import styles from "./Carousel.module.css";
import { useState } from "react";
const sliderData = [
  {
    id: "1",
    image: "/images/spie.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore modi distinctio deserunt voluptates esse dicta officia earum. ",
    auther: "john doe",
    position: "CEO",
  },
  {
    id: "2",
    image: "/images/siemens.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore modi distinctio deserunt voluptates esse dicta officia earum. ",
    auther: "john doe",
    position: "CEO",
  },
  {
    id: "3",
    image: "/images/lvmh.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore modi distinctio deserunt voluptates esse dicta officia earum. ",
    auther: "john doe",
    position: "CEO",
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
    <div className={styles.sliderContainer}>
      <button
        className={currentSlide === 0 && styles.hide}
        onClick={handleLeftBtn}
      >
        &lt;
      </button>
      {sliderData.map((slide, i) => (
        <div
          key={i}
          className={styles.slide}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div>
            {" "}
            <Image src={slide.image} width={200} height={200} alt="bla" />
          </div>

          <div>
            <p>❤❤❤❤❤</p>
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
        &gt;
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
  );
}

export default Carousel;
