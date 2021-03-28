import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import styles from "./Navigation.module.scss";

const Navigation = () => (
  <nav className={styles.navigation}>
    <div className={styles.navigation__wrapper}>
      <div className={styles.navigationItems__wrapper}>
        <NavigationItem name="DASHBOARD" />
        <NavigationItem name="RECIPES" />
        <NavigationItem name="CHALLENGE" />
      </div>
      <div className={styles.person__wrapper}></div>
    </div>
  </nav>
);

export default Navigation;
