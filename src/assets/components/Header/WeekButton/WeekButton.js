import React from "react";
import styles from "./WeekButton.module.scss";
import dotGrey from "../../../icons/dot-grey.png";
import dotGreen from "../../../icons/dot-green.png";
import dotWhite from "../../../icons/dot-white.png";

const WeekButton = ({ number, week }) => {
  console.log(number);
  console.log(week + 1);
  const pointWeek = () => {
    if (parseInt(number) === week + 1) {
      return dotWhite;
    } else if (number < week + 1) {
      return dotGreen;
    } else {
      return dotGrey;
    }
  };

  return (
    <div className={styles.week__wrapper}>
      <div
        className={styles.dot}
        style={{ backgroundImage: `url(${pointWeek()})` }}
      ></div>
      <p className={styles.weekNumber}>{number}</p>
    </div>
  );
};

export default WeekButton;
