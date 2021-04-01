import React from "react";
import styles from "./ShortAd.module.scss";
import ButtonAdd from "../ButtonAd/ButtonAd";

const ShortAd = ({ data }) => {
  return (
    <>
      <div className={styles.shortAdd__container}>
        <h3>{data.title}</h3>
        <p>{data.text}</p>
        <div className={styles.button__container}>
          <ButtonAdd button={data.button} />
        </div>
      </div>
    </>
  );
};

export default ShortAd;
