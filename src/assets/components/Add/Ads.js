import React from "react";
import styles from "./Ads.module.scss";
import ShortAdd from "./ShortAdd/ShortAd";

const Ads = () => (
  <>
    <div className={styles.add__container}>
      <ShortAdd />
      <ShortAdd />
      <ShortAdd />
    </div>
  </>
);

export default Ads;
