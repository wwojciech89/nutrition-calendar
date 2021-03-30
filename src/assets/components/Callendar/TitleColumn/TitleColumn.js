import React from "react";
import styles from "./TitleColumn.module.scss";

const TitleColumn = () => (
  <>
    <div className={styles.column__container}>
      <div className={styles.grid__bigUpper}>
        <p>6:00 AM</p>
      </div>
      <div className={styles.grid__medium}>
        <p>9:00 AM</p>
      </div>
      <div className={styles.grid__medium}>
        <p>12:00 PM</p>
      </div>
      <div className={styles.grid__medium}>
        <p>3:00 PM</p>
      </div>
      <div className={styles.grid__bigLower}>
        <p>6:00 PM</p>
      </div>
      <div className={styles.grid__small}>
        <p>Workout</p>
      </div>
    </div>
  </>
);

export default TitleColumn;
