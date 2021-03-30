import React from "react";
import styles from "./Header.module.scss";
import Button from "./Button/Button";
import leftArrow from "../../icons/arrow-left.png";
import rightArrow from "../../icons/arrow-right.png";

const Header = () => (
  <>
    <div className={styles.header__wrapper}>
      <div className={styles.progress__container}></div>
      <div className={styles.week__container}>
        <Button direction={leftArrow} />
        <h1>Week 7</h1>
        <Button direction={rightArrow} />
      </div>
      <div className={styles.selector__container}></div>
    </div>
  </>
);

export default Header;
