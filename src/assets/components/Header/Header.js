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
import dot from "../../icons/dot-grey.png";

const Header = ({ week, setWeek }) => {
  const data = useContext(DataContext);

  console.log(data.length);

  return (
    <div className={styles.header__wrapper}>
      <div className={styles.progress__container}>
        <p>YOUR 12 WEEK PROGRESS</p>
        <div className={styles.dots__container}>
          <WeekButton dot={dot} number="1" />
          <WeekButton dot={dot} number="2" />
          <WeekButton dot={dot} number="3" />
          <WeekButton dot={dot} number="4" />
          <WeekButton dot={dot} number="5" />
          <WeekButton dot={dot} number="6" />
          <WeekButton dot={dot} number="7" />
          <WeekButton dot={dot} number="8" />
          <WeekButton dot={dot} number="9" />
          <WeekButton dot={dot} number="10" />
          <WeekButton dot={dot} number="11" />
          <WeekButton dot={dot} number="12" />
        </div>
      </div>
      <div className={styles.week__container}>
        <Button
          direction={leftArrow}
          handleClick={() => {
            setWeek(week - 1);
          }}
        />
        <h1>Week {week + 1}</h1>
        <Button
          direction={rightArrow}
          handleClick={() => {
            setWeek(week + 1);
          }}
        />
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
