import React from "react";
import styles from "./ShortAd.module.scss";
import ButtonAdd from "../ButtonAd/ButtonAd";

const ShortAds = () => (
  <>
    <div className={styles.shortAdd__container}>
      <h3>Running out of products?</h3>
      <p>
        Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet.
      </p>
      <div className={styles.button__container}>
        <ButtonAdd text="Buy now" />
      </div>
    </div>
  </>
);

export default ShortAds;
