import React, { useContext, useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import DashboardHeader from "./DashboardHeader";
import ThreadCard from "../Threads/ThreadCard";
import { context } from "../../store/DataProvider";
import ProjectsList from "../Projects/ProjectsList";
import SentMessage from "./../UI/Chat Cards/SentMessage";
import RecievedMessage from "./../UI/Chat Cards/RecievedMessage";

function Dashboard() {
  const ctx = useContext(context);
  const [selectedUserId, setSelectedUserId] = useState(0);
  const [inputMessage, setInputMessage] = useState();
  const [filter, setFilter] = useState(false);
  const [userArray, setUserArray] = useState(ctx.data);
  const [filteredUser, setFilteredUser] = useState([]);

  console.log(filter);

  useEffect(() => {
    if (!filter) {
      const temp = userArray.filter((user) => user.id === selectedUserId);
      setFilteredUser(temp);
    } else {
      const filteredThreads = ctx.data.filter((threadInfo) =>
        threadInfo.messages.some((msg) => !msg.read)
      );
      setUserArray(filteredThreads);
      const temp = filteredThreads.filter((user) => user.id === selectedUserId);
      setFilteredUser(temp);
    }
  }, [ctx.data, userArray, selectedUserId, filter]);

  //   useEffect(() => {
  //     console.log(userArray);
  //     console.log(filteredUser);
  //   }, [userArray, filteredUser]);

  function getCurrentTime() {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }

  const sendMessage = (e) => {
    e.preventDefault();
    if (!filteredUser || inputMessage.trim() === "") {
      alert("Please enter a message.");
      return;
    }

    const newMessage = {
      message: inputMessage,
      sent: true,
      time: getCurrentTime(),
      read: true,
    };

    filteredUser[0].messages.unshift(newMessage);
    setInputMessage("");
  };

  return (
    <div className={styles.container}>
      <DashboardHeader setFilter={setFilter} />
      <div className={styles["thread-message-wrapper"]}>
        <div className={styles.threads}>
          {userArray.map((userInfo) => (
            <ThreadCard
              key={userInfo.id}
              id={userInfo.id}
              name={userInfo.name}
              messages={userInfo.messages}
              projects={userInfo.projects}
              onSelectUserId={setSelectedUserId}
            />
          ))}
        </div>

        <div className={styles["thread-info"]}>
          {filteredUser.length > 0 && (
            <p className={styles.name}>{filteredUser[0].name}</p>
          )}
          <div className={styles.projects}>
            <p className={styles["projects-heading"]}>Projects</p>
            {filteredUser.map((userInfo) => (
              <ProjectsList
                key={userInfo.id}
                id={userInfo.id}
                projects={userInfo.projects}
              />
            ))}
          </div>
          <div className={styles["chats"]}>
            {filteredUser.length > 0 &&
              filteredUser[0].messages
                .slice()
                .reverse()
                .map((messageInfo, idx) =>
                  messageInfo.sent ? (
                    <div className={styles["sent-message"]}>
                      <SentMessage key={idx}>{messageInfo.message}</SentMessage>
                      <p className={styles.time}>{messageInfo.time}</p>
                    </div>
                  ) : (
                    <div className={styles["received-message"]}>
                      <RecievedMessage key={idx}>
                        {messageInfo.message}
                      </RecievedMessage>
                      <p className={styles.time}>{messageInfo.time}</p>
                    </div>
                  )
                )}
          </div>
          <form onSubmit={sendMessage}>
            <input
              type="text"
              placeholder="Write a message..."
              onChange={(e) => setInputMessage(e.target.value)}
              value={inputMessage}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
