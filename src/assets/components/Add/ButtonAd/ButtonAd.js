import React from "react";
import styles from "./ButtonAd.module.scss";

const ButtonAd = ({ text }) => (
  <>
    <a href="/" className={styles.wrapper}>
      <div className={styles.image__container}></div>
      <p className={styles.text}>{text}</p>
      <div className={styles.arrow__container}></div>
    </a>
  </>
);

export default ButtonAd;
