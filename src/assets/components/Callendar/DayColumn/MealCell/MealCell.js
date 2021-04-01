import React, { useState } from "react";
import styles from "./MealCell.module.scss";

const MealCell = ({ text, checkCircle, checked, dueStyle }) => {
  const [done, setDone] = useState(checked);

  const handleClick = () => {
    if (done === false) {
      setDone(true);
    } else if (done === true) {
      setDone(false);
    }
  };

  return (
    <div style={dueStyle} className={styles.grid__meal} onClick={handleClick}>
      <p>{text}</p>
      <img src={checkCircle} alt="checked" className={styles.checkCircle} />
    </div>
  );
};

export default MealCell;
