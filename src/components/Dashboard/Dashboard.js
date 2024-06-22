import React, { useContext } from "react";
import styles from "./Dashboard.module.css";
import DashboardHeader from "./DashboardHeader";
import ThreadCard from "../Threads/ThreadCard";
import { context } from "../../store/DataProvider";

function Dashboard() {
  const ctx = useContext(context);

  return (
    <div className={styles.container}>
      <DashboardHeader />
      <div className={styles["thread-message-wrapper"]}>
        <div className={styles.threads}>
          {ctx.data.map((userInfo) => (
            <ThreadCard
              id={userInfo.id}
              name={userInfo.name}
              messages={userInfo.messages}
              projects={userInfo.projects}
            />
          ))}
        </div>

        <div className={styles["message-info"]}>
          <p>dlfhkdsj</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
