import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Stomp from "stompjs";
import { receiveMessage } from "@/redux/slices/messagingSlice";

const useWebSockets = (topic) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const stompRef = useRef(null);
  const reconnectTimeoutRef = useRef(null);

  const stompFailureCallback = () => {
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = null;
    }
    reconnectTimeoutRef.current = setTimeout(stompConnect, 1000);
  };

  const stompConnect = () => {
    stompRef.current = Stomp.over(
      new WebSocket("wss://danit-final-twitter-8f32e99a3dec.herokuapp.com/ws"),
    );
    stompRef.current.connect({}, handleSocketOpen, stompFailureCallback);
  };

  const handleSocketOpen = () => {
    stompRef.current.subscribe(`/${topic}/${user.id}`, (message) => {
      if (topic.includes("messages")) dispatch(receiveMessage(JSON.parse(message.body)));
    });

    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    stompConnect();

    return () => {
      if (stompRef.current && stompRef.current.connected) {
        stompRef.current.disconnect();
      }

      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
        reconnectTimeoutRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useWebSockets;
