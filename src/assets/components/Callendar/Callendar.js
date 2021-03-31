import React from "react";
import styles from "./Callendar.module.scss";
import TitleColumn from "./TitleColumn/TitleColumn";
import DayColumn from "./DayColumn/DayColumn";
import FreeDayColumn from "./FreeDayColumn/FreeDayColumn";

import workout from "../../icons/ball-grey.png";
import check from "../../icons/check-orange.png";
import checkCircle from "../../icons/check-circle-orange.png";
import smile from "../../icons/smile-grey.png";
import printer from "../../icons/printer-grey.png";

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
      <FreeDayColumn printer={printer} smile={smile} />
      {/* tu będą 3 rodzaje column/ tytułowa/ robocza/ i dnia 7 */}
    </div>
  </>
);

export default Callendar;
