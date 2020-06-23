import React from "react";
import Chat from "./chat/Chat";
import ConnectedUsers from "./chat/ConnectedUsers";
import "./Home.css";

export default function Home(props) {
  return (
    <div>
      <h1>Welcome to the chat-demo, {props.user.username}</h1>
      <div className="home-display">
        <Chat {...props} />
        <ConnectedUsers {...props} />
      </div>
    </div>
  );
}
