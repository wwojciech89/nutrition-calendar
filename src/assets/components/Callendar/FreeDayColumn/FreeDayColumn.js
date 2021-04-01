import React from "react";
import styles from "./FreeDayColumn.module.scss";

const FreeDayColumn = ({ smile, printer }) => (
  <>
    <div className={styles.column__container}>
      <div className={styles.grid__day}>
        <h2>DAY 7</h2>
      </div>
      <div className={styles.grid__main}>
        <p>GUILT-FREE DAY</p>
        <img src={smile} alt="smile" className={styles.smile} />
      </div>
      <div className={styles.grid__print}>
        <img src={printer} alt="printer" />
        <p>Print</p>
      </div>
    </div>
  </>
);

export default FreeDayColumn;
