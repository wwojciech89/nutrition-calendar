import React from "react";
import styles from "./DayColumn.module.scss";

const DayColumn = ({ workout, check, checkCircle }) => (
  <>
    <div className={styles.column__container}>
      <div className={styles.grid__day}>
        <h2>DAY 1</h2>
      </div>
      <div className={styles.grid__meal}>
        <p>śniadanie</p>
        <img src={checkCircle} alt="checked" />
      </div>
      <div className={styles.grid__meal}>
        <p>2 śniadanie</p>
        <img src={checkCircle} alt="checked" />
      </div>
      <div className={styles.grid__meal}>
        <p>obiada asdass sda da da sds</p>
        <img src={checkCircle} alt="checked" />
      </div>
      <div className={styles.grid__meal}>
        <p>podwieczorek</p>
        <img src={checkCircle} alt="checked" />
      </div>
      <div className={styles.grid__mealSpecial}>
        <p>kolacja</p>
        <img src={checkCircle} alt="checked" />
      </div>
      <div className={styles.grid__carb}>
        <p>LOW-CARB</p>
      </div>
      <div className={styles.grid__training}>
        <img src={workout} alt="workout" />
        <img src={check} alt="checked" className={styles.check} />
      </div>
    </div>
  </>
);

export default DayColumn;
