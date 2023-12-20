import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Stomp from "stompjs";

const useWebSockets = (topic) => {
  const user = useSelector((state) => state.user.user);
  const stompRef = useRef(null);
  const reconnectTimeoutRef = useRef(null);

  const stompFailureCallback = (error) => {
    // console.log("STOMP: " + error);
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = null;
    }
    reconnectTimeoutRef.current = setTimeout(stompConnect, 1000);
    // console.log("STOMP: Reconnecting in 1 second");
  };

  const stompConnect = () => {
    // console.log("STOMP: Attempting connection");
    stompRef.current = Stomp.over(
      new WebSocket("ws://danit-final-twitter-8f32e99a3dec.herokuapp.com/ws"),
    );
    stompRef.current.connect({}, handleSocketOpen, stompFailureCallback);
  };

  const handleSocketOpen = () => {
    // console.log("SockJS connection opened");

    stompRef.current.subscribe(`/${topic}/${user.id}`, (message) => {
      console.log("Message received:", message.body);
    });

    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    stompConnect();

    return () => {
      // console.log("Cleaning up SockJS connection");
      if (stompRef.current && stompRef.current.connected) {
        stompRef.current.disconnect();
      }

      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
        reconnectTimeoutRef.current = null;
      }
    };
  }, []);

  const sendMessage = (destination, headers, body) => {
    if (stompRef.current && stompRef.current.connected) {
      stompRef.current.send(destination, headers, body);
    } else {
      console.warn("WebSocket not connected. Message not sent.");
    }
  };

  return { sendMessage };
};

export default useWebSockets;
