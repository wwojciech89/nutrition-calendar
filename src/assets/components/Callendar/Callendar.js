import React, { useContext, useState } from "react";
import styles from "./Callendar.module.scss";
import TitleColumn from "./TitleColumn/TitleColumn";
import DayColumn from "./DayColumn/DayColumn";
import FreeDayColumn from "./FreeDayColumn/FreeDayColumn";
import Header from "../Header/Header";

import check from "../../icons/check-orange.png";
import checkCircle from "../../icons/check-circle-orange.png";
import smile from "../../icons/smile-grey.png";
import printer from "../../icons/printer-grey.png";
import { DataContext } from "../../contexts/DataContext";

const Callendar = () => {
  const data = useContext(DataContext);
  const [week, setWeek] = useState(0);

  const mappedWeek = data[week]?.map((el, index) => {
    return (
      <DayColumn
        key={index}
        check={check}
        checkCircle={checkCircle}
        data={el}
      />
    );
  });

  return (
    <>
      <Header setWeek={setWeek} week={week} />
      <div className={styles.callendar__container}>
        <TitleColumn />
        {mappedWeek}
        <FreeDayColumn printer={printer} smile={smile} />
      </div>
    </>
  );
};

export default Callendar;
