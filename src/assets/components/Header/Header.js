import React, { useContext } from "react";
import styles from "./Header.module.scss";
import Button from "./Button/Button";
import FoodSelector from "./FoodSelector/FoodSelector";
import WeekButton from "./WeekButton/WeekButton";
import { DataContext } from "../../contexts/DataContext";

import leftArrow from "../../icons/arrow-left.png";
import rightArrow from "../../icons/arrow-right.png";
import burgerGrey from "../../icons/burger-grey.png";
import burgerGreen from "../../icons/burger-green.png";
import donutGrey from "../../icons/donut-grey.png";
import donutGreen from "../../icons/donut-green.png";
import fishGrey from "../../icons/fish-grey.png";
import fishGreen from "../../icons/fish-green.png";
import pizzaGrey from "../../icons/pizza-grey.png";
import pizzaGreen from "../../icons/pizza-green.png";
import riceGrey from "../../icons/rice-grey.png";
import riceGreen from "../../icons/rice-green.png";

const Header = ({ week, setWeek }) => {
  const data = useContext(DataContext);

  const handlePreviousWeekClick = () => {
    if (week > 0) {
      setWeek(week - 1);
    }
  };

  const handleNextWeekClick = () => {
    if (week < data.length - 1) {
      setWeek(week + 1);
    }
  };

  return (
    <div className={styles.header__wrapper}>
      <div className={styles.progress__container}>
        <p>YOUR 12 WEEK PROGRESS</p>
        <div className={styles.dots__container}>
          <WeekButton number="1" week={week} />
          <WeekButton number="2" week={week} />
          <WeekButton number="3" week={week} />
          <WeekButton number="4" week={week} />
          <WeekButton number="5" week={week} />
          <WeekButton number="6" week={week} />
          <WeekButton number="7" week={week} />
          <WeekButton number="8" week={week} />
          <WeekButton number="9" week={week} />
          <WeekButton number="10" week={week} />
          <WeekButton number="11" week={week} />
          <WeekButton number="12" week={week} />
        </div>
      </div>
      <div className={styles.week__container}>
        <Button directionIcon={leftArrow} onClick={handlePreviousWeekClick} />
        <h1>Week {week + 1}</h1>
        <Button directionIcon={rightArrow} onClick={handleNextWeekClick} />
      </div>
      <div className={styles.selector__container}>
        <p>SELECT YOUR PROTEIN OPTIONS</p>
        <div className={styles.icons__container}>
          <FoodSelector inactive={burgerGrey} active={burgerGreen} />
          <FoodSelector inactive={donutGrey} active={donutGreen} />
          <FoodSelector inactive={fishGrey} active={fishGreen} />
          <FoodSelector inactive={pizzaGrey} active={pizzaGreen} />
          <FoodSelector inactive={riceGrey} active={riceGreen} />
        </div>
      </div>
    </div>
  );
};

export default Header;
