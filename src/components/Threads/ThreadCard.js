import React from "react";
import styles from "./ThreadCard.module.css";
import ProjectCard from "../UI/Project Card/ProjectCard";

function ThreadCard(props) {
  const { id, name, messages, projects } = props;

  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <p>{name}</p>
        <p>{messages[0].time}</p>
      </div>
      <p className={styles.message}>{messages[0].message}</p>
      {projects.map((project) => (
        <ProjectCard>{<p>{project.title}</p>}</ProjectCard>
      ))}
      {/* <p>{id}</p>
      <p>{name}</p>
      {messages.map((messageInfo) => (
        <p>
          {messageInfo.message} {messageInfo.time}
        </p>
      ))}
      {projects.map((projectInfo) => (
        <p>
          {projectInfo.title} {projectInfo.completed.toString()}
        </p>
      ))} */}
    </div>
  );
}

export default ThreadCard;
