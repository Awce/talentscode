import React, { createContext } from "react";
import { useCustomSocket } from "../hooks/useCustomSocket";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { socket, online } = useCustomSocket("http://192.168.0.5:9000");

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
