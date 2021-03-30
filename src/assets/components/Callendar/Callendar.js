import React from "react";
import styles from "./Callendar.module.scss";
import TitleColumn from "./TitleColumn/TitleColumn";

const Callendar = () => (
  <>
    <div className={styles.callendar__container}>
      <TitleColumn />
      {/* tu będą 3 rodzaje column/ tytułowa/ robocza/ i dnia 7 */}
    </div>
  </>
);

export default Callendar;
