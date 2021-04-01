import React, { useState } from "react";
import styles from "./FoodSelector.module.scss";

const FoodSelector = ({ active, inactive }) => {
  const [src, setSrc] = useState(inactive);

  const handleClick = () => {
    if (src === active) {
      setSrc(inactive);
    } else if (src === inactive) {
      setSrc(active);
    }
  };

  return (
    <img
      src={src}
      className={styles.foodIcon}
      alt="food"
      onClick={handleClick}
    ></img>
  );
};

export default FoodSelector;
