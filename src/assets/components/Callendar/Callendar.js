import React from "react";
import styles from "./Callendar.module.scss";
import TitleColumn from "./TitleColumn/TitleColumn";
import DayColumn from "./DayColumn/DayColumn";

const Callendar = () => (
  <>
    <div className={styles.callendar__container}>
      <TitleColumn />
      <DayColumn />
      {/* tu będą 3 rodzaje column/ tytułowa/ robocza/ i dnia 7 */}
    </div>
  </>
);

export default Callendar;
