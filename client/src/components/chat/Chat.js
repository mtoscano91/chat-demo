import React from "react";

export default function Chat(props) {
  const chatMessage = () => {
    if (props.user) {
      return <h1>Hello from chat, {props.user.username}</h1>;
    } else {
      return <h1>Hello from chat</h1>;
    }
  };
  return <div>{chatMessage()}</div>;
}
