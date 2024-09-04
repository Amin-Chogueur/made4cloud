import styles from "./testimeniel.module.css";
import Carousel from "./Carousel";

function Testimeniel() {
  return (
    <div className={styles.container}>
      <div className={styles.reviews}>
        <div className={styles.content}>
          <h2>Client Raves About Made4Cloud</h2>

          <p>
            Discover the genuine acclaim from those who`ve experienced
            Made4Cloud`s transformative touch in their digital ventures.
          </p>
        </div>
        <Carousel />
      </div>
    </div>
  );
}

export default Testimeniel;
