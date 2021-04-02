import React, { useState } from "react";
import styles from "./DayColumn.module.scss";
import MealCell from "./MealCell/MealCell";

import workoutOrange from "../../../icons/ball-orange.png";
import workoutGrey from "../../../icons/ball-grey.png";

const DayColumn = ({ check, checkCircle, data }) => {
  const [workoutStatus, setWorkoutStatus] = useState(data.workoutDone);

  const handleClick = () => {
    if (workoutStatus) {
      setWorkoutStatus(false);
    } else if (workoutStatus === false) {
      setWorkoutStatus(true);
    }
  };

  return (
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
      <div className={styles.grid__training} onClick={handleClick}>
        {workoutStatus ? (
          <>
            <img src={workoutOrange} alt="workout" />
            <img src={check} alt="checked" className={styles.check} />
          </>
        ) : (
          <>
            <img src={workoutGrey} alt="workout" />
          </>
        )}
      </div>
    </div>
  );
};

export default DayColumn;
