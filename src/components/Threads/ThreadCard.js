import React from "react";
import styles from "./ThreadCard.module.css";
import ProjectCard from "../UI/Project Card/ProjectCard";

function ThreadCard(props) {
  const { id, name, messages, projects, onSelectUserId } = props;

  return (
    <div className={styles.container} onClick={() => onSelectUserId(id)}>
      <div className={styles.name}>
        <p>{name}</p>
        <p>{messages[0].time}</p>
      </div>
      <p className={styles.message}>{messages[0].message}</p>
      {projects.length < 3 &&
        projects.map((project, idx) => (
          <ProjectCard key={idx}>{<p>{project.title}</p>}</ProjectCard>
        ))}
      {projects.length > 2 && (
        <>
          <ProjectCard>
            <p>{projects[0].title}</p>
          </ProjectCard>
          <ProjectCard>
            <p>+{projects.length - 1} other projects</p>
          </ProjectCard>
        </>
      )}
    </div>
  );
}

export default ThreadCard;
