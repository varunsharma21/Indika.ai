import React from "react";
import styles from "./ProjectCard.module.css";

function ProjectCard(props) {
  return <div className={styles.container}>{props.children}</div>;
}

export default ProjectCard;
