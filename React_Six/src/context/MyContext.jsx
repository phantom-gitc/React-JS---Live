import { createContext } from "react";

//Setup a blank store .

const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  return <MyStore.Provider>{children}</MyStore.Provider>;
};
