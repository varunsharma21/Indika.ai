import React from "react";
import styles from "./ProjectsList.module.css";
import Project from "./Project";

function ProjectsList(props) {
  const { id, key, projects } = props;

  return (
    <div className={styles.container}>
      {projects.length === 0 && (
        <p className={styles["no-projects"]}>No projects allocated</p>
      )}
      {projects.map((project, idx) => (
        <Project key={idx} title={project.title} status={project.completed} />
      ))}
    </div>
  );
}

export default ProjectsList;
