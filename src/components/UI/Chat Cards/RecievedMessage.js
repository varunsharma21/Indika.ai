import React from "react";
import styles from "./RecievedMessage.module.css";

function RecievedMessage(props) {
  return <div className={styles.container}>{props.children}</div>;
}

export default RecievedMessage;
