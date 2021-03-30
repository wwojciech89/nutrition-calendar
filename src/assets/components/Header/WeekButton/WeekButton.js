import React from "react";
import styles from "./WeekButton.module.scss";

const WeekButton = ({ number, dot }) => (
  <>
    <div className={styles.week__wrapper}>
      <div
        className={styles.dot}
        style={{ backgroundImage: `url(${dot})` }}
      ></div>
      <p className={styles.weekNumber}>{number}</p>
    </div>
  </>
);

export default WeekButton;
