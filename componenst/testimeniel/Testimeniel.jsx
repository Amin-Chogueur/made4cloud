import styles from "./testimeniel.module.css";
import Carousel from "./Carousel";

function Testimeniel() {
  return (
    <div className={styles.container}>
      <div className={styles.reviews}>
        <div className={styles.content}>
          <h2>Client Raves About Pulstech</h2>
          <p>💬 99.9% Customer Satisfaction</p>
          <p>
            Discover the genuine acclaim from those who`ve experienced
            Pulstech`s transformative touch in their digital ventures.
          </p>
        </div>
        <Carousel />
      </div>
    </div>
  );
}

export default Testimeniel;
