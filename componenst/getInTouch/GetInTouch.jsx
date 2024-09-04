import Link from "next/link";
import styles from "./getInTouch.module.css";
function GetInTouch() {
  return (
    <div className={styles.getInTouch}>
      <div className={styles.getContainer}>
        <div className={styles.left}>
          <h2>Ready to Ignite Your Digital Journey?</h2>
          <p>
            Contact Made4Cloud today to start a conversation about how we can
            turn your digital aspirations into reality. Let`s innovate together.
          </p>
        </div>
        <div className={styles.right}>
          <button>
            <Link href={"/contact"}>Get Started Now!</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
