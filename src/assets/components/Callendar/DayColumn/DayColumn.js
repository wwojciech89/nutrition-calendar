import React from "react";
import styles from "./DayColumn.module.scss";
import MealCell from "./MealCell/MealCell";

const DayColumn = ({ workout, check, checkCircle, data }) => {
  return (
    <>
      <div className={styles.column__container}>
        <div className={styles.grid__day}>
          <h2>{data.day}</h2>
        </div>
        <MealCell
          text={data.breakfast.text}
          checked={data.breakfast.checked}
          checkCircle={checkCircle}
        />
        <MealCell
          text={data.secoundBreakfast.text}
          checked={data.secoundBreakfast.checked}
          checkCircle={checkCircle}
        />
        <MealCell
          text={data.dinner.text}
          checked={data.dinner.checked}
          checkCircle={checkCircle}
        />
        <MealCell
          text={data.snack.text}
          checked={data.snack.checked}
          checkCircle={checkCircle}
        />
        <MealCell
          text={data.supper.text}
          checked={data.supper.checked}
          checkCircle={checkCircle}
          dueStyle={{ borderBottom: `2px solid #e7e7e7` }}
        />
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
