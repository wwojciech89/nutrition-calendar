import React, { useContext } from "react";
import styles from "./Callendar.module.scss";
import TitleColumn from "./TitleColumn/TitleColumn";
import DayColumn from "./DayColumn/DayColumn";
import FreeDayColumn from "./FreeDayColumn/FreeDayColumn";

import workout from "../../icons/ball-grey.png";
import check from "../../icons/check-orange.png";
import checkCircle from "../../icons/check-circle-orange.png";
import smile from "../../icons/smile-grey.png";
import printer from "../../icons/printer-grey.png";
import { DataContext } from "../../contexts/DataContext";

const Callendar = () => {
  const data = useContext(DataContext);
  const mappedWeek = data[0]?.map((el) => {
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
    <DataContext.Provider value={data}>
      <div className={styles.callendar__container}>
        <TitleColumn />
        {mappedWeek}
        <FreeDayColumn printer={printer} smile={smile} />
      </div>
    </DataContext.Provider>
  );
};

export default Callendar;
