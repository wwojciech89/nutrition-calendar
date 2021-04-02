import React from "react";
import styles from "./Button.module.scss";

const Button = ({ direction, handleNextWeekClick }) => (
  <button
    onClick={handleNextWeekClick}
    type="button"
    className={styles.button__wrapper}
  >
    <div
      className={styles.button}
      style={{ backgroundImage: `url(${direction})` }}
    ></div>
  </button>
);

export default Button;
