import React from "react";
import styles from "./Button.module.scss";

const Button = ({ directionIcon, onClick }) => (
  <button onClick={onClick} type="button" className={styles.button__wrapper}>
    <div
      className={styles.button}
      style={{ backgroundImage: `url(${directionIcon})` }}
    ></div>
  </button>
);

export default Button;
