import React from "react";
import styles from "./DashboardHeader.module.css";

function DashboardHeader({ setFilter }) {
  return (
    <div className={styles["dashboard-header"]}>
      <p className={styles.heading}>Messages</p>
      <div className={styles.filters}>
        <div
          className={styles["all-messsages-btn"]}
          onClick={() => setFilter(false)}
        >
          <p>All Messages</p>
        </div>
        <div
          className={styles["unread-messsages-btn"]}
          onClick={() => setFilter(true)}
        >
          <p>Unread</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
