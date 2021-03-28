import React from "react";
import styles from "./NavigationItem.module.scss";

const NavigationItem = ({ name }) => (
  <>
    <div className={styles.item__wrapper}>{name}</div>
  </>
);

export default NavigationItem;
