import React, { createContext, useEffect, useState } from "react";
import weeks from "../data/weeks";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(weeks);
  }, [weeks]);
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
