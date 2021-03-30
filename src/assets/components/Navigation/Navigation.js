import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import styles from "./Navigation.module.scss";
import { accounts } from "../../data/accounts";

const Navigation = () => (
  <nav className={styles.navigation}>
    <div className={styles.logo__space}></div>
    <div className={styles.navigation__wrapper}>
      <div className={styles.navigationItems__wrapper}>
        <NavigationItem name="DASHBOARD" />
        <NavigationItem name="RECIPES" />
        <NavigationItem name="CHALLENGE" />
      </div>
      <div className={styles.person__wrapper}>
        <img className={styles.picture} src={accounts[0].image} alt="user" />
        <p className={styles.name}>{accounts[0].name}</p>
        <div className={styles.arrow}></div>
      </div>
    </div>
  </nav>
);

export default Navigation;
