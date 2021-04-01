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

import weeks from "../../data/weeks";

const Callendar = () => {
  let createWeek = weeks[0].map((el) => {
    return (
      <DayColumn
        workout={workout}
        check={check}
        checkCircle={checkCircle}
        data={el}
      />
    );
  });

  return (
    <>
      <div className={styles.callendar__container}>
        <TitleColumn />
        {createWeek}
        {/* <p>{weeks[0][0].day}</p>
        <DayColumn workout={workout} check={check} checkCircle={checkCircle} />
        <DayColumn workout={workout} check={check} checkCircle={checkCircle} />
        <DayColumn workout={workout} check={check} checkCircle={checkCircle} />
        <DayColumn workout={workout} check={check} checkCircle={checkCircle} />
        <DayColumn workout={workout} check={check} checkCircle={checkCircle} />
        <DayColumn workout={workout} check={check} checkCircle={checkCircle} /> */}
        <FreeDayColumn printer={printer} smile={smile} />
      </div>
    </>
  );
};

export default Callendar;
