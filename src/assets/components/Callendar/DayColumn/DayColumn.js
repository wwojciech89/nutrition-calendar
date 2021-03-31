import React from "react";
import styles from "./DayColumn.module.scss";

const DayColumn = () => (
  <>
    <div className={styles.column__container}>
      <div className={styles.grid__day}>
        <h2>DAY 1</h2>
      </div>
      <div className={styles.grid__meal}>
        <p>śniadanie</p>
        <p>OK</p>
      </div>
      <div className={styles.grid__meal}>
        <p>2 śniadanie</p>
        <p>OK</p>
      </div>
      <div className={styles.grid__meal}>
        <p>obiad</p>
        <p>OK</p>
      </div>
      <div className={styles.grid__meal}>
        <p>podwieczorek</p>
        <p>OK</p>
      </div>
      <div className={styles.grid__meal}>
        <p>kolacja</p>
        <p>OK</p>
      </div>
      <div className={styles.grid__carb}>
        <p>LOW-CARB</p>
      </div>
      <div className={styles.grid__training}>
        <p>hantle</p>
      </div>
    </div>
  </>
);

export default DayColumn;
