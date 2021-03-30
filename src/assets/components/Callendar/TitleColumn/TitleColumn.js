import React from "react";
import styles from "./TitleColumn.module.scss";

const TitleColumn = () => (
  <>
    <div className={styles.column__container}>
      <div className={styles.breakfast}>
        <p>6:00 AM</p>
      </div>
    </div>
  </>
);

export default TitleColumn;
