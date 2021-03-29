import React from "react";
import styles from "./Header.module.scss";

const Header = () => (
  <>
    <div className={styles.header__wrapper}>
      <div className={styles.progress__container}></div>
      <div className={styles.week__container}></div>
      <div className={styles.selector__container}></div>
    </div>
  </>
);

export default Header;
