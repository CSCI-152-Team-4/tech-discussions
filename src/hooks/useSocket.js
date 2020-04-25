import React, { useRef, useEffect } from "react";
import io from "socket.io-client";

const useSocket = (...args) => {
  const socket = useRef(io(...args)).current;
  useEffect(() => {
    return () => {
      console.log("removing main socket")
      socket.removeAllListeners();
      socket.close();
    };
  }, []);
  return socket;
};

export default useSocket;