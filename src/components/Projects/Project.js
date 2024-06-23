import React from "react";
import styles from "./Project.module.css";

function Project(props) {
  const { title, status } = props;

  return (
    <div className={styles.container}>
      <p>{title}</p>
      {status ? (
        <div className={styles["completed"]}>
          <p>Completed</p>
        </div>
      ) : (
        <div className={styles["in-progress"]}>
          <p>In progress</p>
        </div>
      )}
    </div>
  );
}

export default Project;
