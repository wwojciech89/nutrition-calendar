import React from "react";
import styles from "./TitleColumn.module.scss";

const TitleColumn = () => (
  <>
    <div className={styles.column__container}>
      <div className={styles.grid__day}></div>
      <div className={styles.grid__meal}>
        <p>6:00 AM</p>
      </div>
      <div className={styles.grid__meal}>
        <p>9:00 AM</p>
      </div>
      <div className={styles.grid__meal}>
        <p>12:00 PM</p>
      </div>
      <div className={styles.grid__meal}>
        <p>3:00 PM</p>
      </div>
      <div className={styles.grid__mealSpecial}>
        <p>6:00 PM</p>
      </div>
      <div className={styles.grid__carb}></div>
      <div className={styles.grid__training}>
        <p>Workout</p>
      </div>
    </div>
  </>
);

export default TitleColumn;
