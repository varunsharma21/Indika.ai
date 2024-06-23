import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>FlexiBench</p>
      </div>
      <ul className={styles.list}>
        <li>Home</li>
        <li>All tasks</li>
        <li>Applied tasks</li>
        <li>Active tasks</li>
        <li>Training</li>
        <li>Support</li>
      </ul>
    </div>
  );
}

export default Header;
