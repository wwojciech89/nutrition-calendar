import React from "react";
import styles from "./ShortAd.module.scss";
import ButtonAdd from "../ButtonAd/ButtonAd";

const ShortAd = ({ data }) => {
  const secondButton = () => {
    if (data.button2) {
      return (
        <>
          <ButtonAdd button={data.button2} />
        </>
      );
    } else {
      return;
    }
  };

  const specifyPosition = () => {
    if (data.position === "left") {
      return styles.shortAdd__containerLeft;
    } else if (data.position === "right") {
      return styles.shortAdd__containerRight;
    } else {
      return styles.shortAdd__container;
    }
  };

  return (
    <>
      <div className={specifyPosition()}>
        <h3>{data.title}</h3>
        <p>{data.text}</p>
        <div className={styles.button__container}>
          <ButtonAdd button={data.button} />
          {secondButton()}
        </div>
      </div>
    </>
  );
};

export default ShortAd;
