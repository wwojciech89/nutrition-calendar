import React from "react";
import styles from "./Button.module.scss";

const Button = ({ direction }) => (
  <>
    <a className={styles.button__wrapper} href="/">
      <div
        className={styles.button}
        style={{ backgroundImage: `url(${direction})` }}
      ></div>
    </a>
  </>
);

export default Button;
