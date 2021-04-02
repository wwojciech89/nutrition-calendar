import React from "react";
import styles from "./ButtonAd.module.scss";
import apple from "../../../icons/apple.png";
import android from "../../../icons/android.png";

const ButtonAd = ({ button }) => {
  let icon = () => {
    if (button.type === "android") {
      return android;
    } else if (button.type === "apple") {
      return apple;
    }
  };
  return (
    <>
      <a href={button.url} className={styles.wrapper}>
        <div
          className={styles.image__container}
          style={{ backgroundImage: `url(${icon()})` }}
        ></div>
        <p className={styles.text}>{button.text}</p>
        <div className={styles.arrow__container}></div>
      </a>
    </>
  );
};
export default ButtonAd;
