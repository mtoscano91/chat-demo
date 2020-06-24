import React from "react";
import Chat from "./chat/Chat";
import ConnectedUsers from "./chat/ConnectedUsers";
import "./Home.css";

export default function Home(props) {
  const welcomeMessage = () => {
    if (props.user) {
      return <h1>Welcome to the chat-demo, {props.user.username}</h1>;
    } else {
      return <h1>Welcome to the chat-demo</h1>;
    }
  };

  return (
    <div>
      {welcomeMessage()}
      <div className="home-display">
        <Chat {...props} />
        <ConnectedUsers {...props} />
      </div>
    </div>
  );
}
