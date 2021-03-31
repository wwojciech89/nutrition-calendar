import React from "react";
import styles from "./Callendar.module.scss";
import TitleColumn from "./TitleColumn/TitleColumn";
import DayColumn from "./DayColumn/DayColumn";
import workout from "../../icons/ball-grey.png";
import check from "../../icons/check-orange.png";
import checkCircle from "../../icons/check-circle-orange.png";

const Callendar = () => (
  <>
    <div className={styles.callendar__container}>
      <TitleColumn />
      <DayColumn workout={workout} check={check} checkCircle={checkCircle} />
      <DayColumn workout={workout} check={check} checkCircle={checkCircle} />
      <DayColumn workout={workout} check={check} checkCircle={checkCircle} />
      <DayColumn workout={workout} check={check} checkCircle={checkCircle} />
      <DayColumn workout={workout} check={check} checkCircle={checkCircle} />
      <DayColumn workout={workout} check={check} checkCircle={checkCircle} />
      {/* tu będą 3 rodzaje column/ tytułowa/ robocza/ i dnia 7 */}
    </div>
  </>
);

export default Callendar;
