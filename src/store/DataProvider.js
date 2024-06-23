import React, { createContext } from "react";

export const context = createContext();

const contextInfo = {
  data: [
    {
      id: 0,
      name: "Jonas",
      messages: [
        {
          message: "Hello Budyy!",
          sent: true,
          time: "1:55 PM",
          read: true,
        },
        {
          message: "Hello Varun!",
          sent: false,
          time: "1:50 PM",
          read: true,
        },
      ],
      projects: [
        {
          title: "Project 1",
          completed: true,
        },
        {
          title: "Project 2",
          completed: false,
        },
      ],
    },
    {
      id: 1,
      name: "Rohan",
      messages: [
        {
          message: "It's been a long time. How are you doing?",
          sent: false,
          time: "1:55 PM",
          read: true,
        },
        {
          message: "Hello Rohan!",
          sent: true,
          time: "1:50 PM",
          read: true,
        },
        {
          message: "Hi there!",
          sent: false,
          time: "1:50 PM",
          read: true,
        },
      ],
      projects: [
        {
          title: "Project 3",
          completed: true,
        },
        {
          title: "Project 4",
          completed: false,
        },
        {
          title: "Project 5",
          completed: false,
        },
      ],
    },
    {
      id: 2,
      name: "Parth",
      messages: [
        {
          message: "Hello Varun!",
          sent: false,
          time: "1:50 PM",
          read: false,
        },
      ],
      projects: [],
    },
    {
      id: 4,
      name: "Rishabh",
      messages: [
        {
          message: "Hello Budyy!",
          sent: true,
          time: "1:55 PM",
          read: true,
        },
        {
          message: "Hello Varun!",
          sent: false,
          time: "1:50 PM",
          read: true,
        },
      ],
      projects: [
        {
          title: "Project 6",
          completed: true,
        },
        {
          title: "Project 7",
          completed: false,
        },
        {
          title: "Project 8",
          completed: false,
        },
        {
          title: "Project 9",
          completed: false,
        },
        {
          title: "Project 10",
          completed: false,
        },
      ],
    },
    {
      id: 5,
      name: "Harsh",
      messages: [
        {
          message: "Hello Budyy!",
          sent: true,
          time: "1:55 PM",
          read: true,
        },
        {
          message: "Hello Varun!",
          sent: false,
          time: "1:50 PM",
          read: true,
        },
      ],
      projects: [
        {
          title: "Project 11",
          completed: true,
        },
        {
          title: "Project 12",
          completed: false,
        },
        {
          title: "Project 13",
          completed: false,
        },
      ],
    },
  ],
};

function DataProvider(props) {
  return (
    <context.Provider value={contextInfo}>{props.children}</context.Provider>
  );
}

export default DataProvider;
