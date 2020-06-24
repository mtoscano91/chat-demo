import React from "react";

export default function ConnectedUsers(props) {
  return (
    <div>
      <h1>Hello from ConnectedUsers</h1>
      <ul>
        {props.connectedUsers.map((user, i) => {
          return <li key={i}>{user}</li>;
        })}
      </ul>
    </div>
  );
}
