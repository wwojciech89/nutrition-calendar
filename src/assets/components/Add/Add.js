import React from "react";
import styles from "./Add.module.scss";
import ShortAdd from "./ShortAdd/ShortAdd";

const Add = () => (
  <>
    <div className={styles.add__container}>
      <ShortAdd />
      <ShortAdd />
      <ShortAdd />
    </div>
  </>
);

export default Add;
