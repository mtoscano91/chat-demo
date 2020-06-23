import React from "react";

export default function Chat(props) {
  return (
    <div>
      <h1>Hello from chat, {props.user.username}</h1>
    </div>
  );
}
