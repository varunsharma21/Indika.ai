import React from "react";
import styles from "./SentMessage.module.css";

function SentMessage(props) {
  return <div className={styles.container}>{props.children}</div>;
}

export default SentMessage;
