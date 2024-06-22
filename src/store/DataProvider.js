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
          time: "1:55 pm",
          read: true,
        },
        {
          message: "Hello Varun!",
          sent: false,
          time: "1:50 pm",
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
  ],
};

function DataProvider(props) {
  return (
    <context.Provider value={contextInfo}>{props.children}</context.Provider>
  );
}

export default DataProvider;
