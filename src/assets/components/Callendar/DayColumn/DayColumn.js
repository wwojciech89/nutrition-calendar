import React from "react";
import styles from "./DayColumn.module.scss";

const DayColumn = ({ workout, check, checkCircle, data }) => {
  console.log(data);
  return (
    <>
      <div className={styles.column__container}>
        <div className={styles.grid__day}>
          <h2>{data.day}</h2>
        </div>
        <div className={styles.grid__meal}>
          <p>{data.breakfast.text}</p>
          <img src={checkCircle} alt="checked" />
        </div>
        <div className={styles.grid__meal}>
          <p>{data.secoundBreakfast.text}</p>
          <img src={checkCircle} alt="checked" />
        </div>
        <div className={styles.grid__meal}>
          <p>{data.dinner.text}</p>
          <img src={checkCircle} alt="checked" />
        </div>
        <div className={styles.grid__meal}>
          <p>{data.snack.text}</p>
          <img src={checkCircle} alt="checked" />
        </div>
        <div className={styles.grid__mealSpecial}>
          <p>{data.supper.text}</p>
          <img src={checkCircle} alt="checked" />
        </div>
        <div className={styles.grid__carb}>
          <p>{data.dietType}</p>
        </div>
        <div className={styles.grid__training}>
          <img src={workout} alt="workout" />
          <img src={check} alt="checked" className={styles.check} />
        </div>
      </div>
    </>
  );
};

export default DayColumn;
