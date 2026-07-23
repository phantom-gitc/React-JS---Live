import { createContext, useState } from "react";

let MyStore = createContext();



let ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <MyStore.Provider value={{ count, setCount }}>{children}</MyStore.Provider>
  );
};

export { MyStore };
export default ContextProvider;
