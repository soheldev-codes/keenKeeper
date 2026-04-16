"use client";
import { createContext, useState } from "react";

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addEntry = (type, name) => {
    const newEntry = {
      id: Date.now(),
      type, // Call / Text / Video
      name,
      date: new Date().toLocaleDateString(),
      title: `${type} with ${name}`,
    };

    setTimeline((prev) => [newEntry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
};
