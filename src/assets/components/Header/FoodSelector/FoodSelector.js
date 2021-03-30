import React from "react";
import styles from "./FoodSelector.module.scss";

const FoodSelector = ({ food }) => (
  <>
    <img src={food} className={styles.foodIcon}></img>
  </>
);

export default FoodSelector;
