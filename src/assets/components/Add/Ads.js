import React from "react";
import styles from "./Ads.module.scss";
import ShortAd from "./ShortAdd/ShortAd";
import ads from "../../data/advertisement";

const Ads = () => {
  let mappedAdd = ads.map((el) => {
    return (
      <>
        <ShortAd data={el} />
      </>
    );
  });

  return (
    <>
      <div className={styles.add__container}>{mappedAdd}</div>
    </>
  );
};
export default Ads;
