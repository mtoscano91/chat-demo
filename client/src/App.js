import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";
import Home from "./components/Home";

////SOCKET IO
import socketIOClient from "socket.io-client";

//If there is a problem put socket in state
let socket;
///SOCKET IO

function App(props) {
  const [user, setUser] = useState(props.user);
  const [connectedUsers, setConnectedUsers] = useState([]);

  const join = (username) => {
    socket.emit("join", {
      username: username,
    });
  };

  const left = (username) => {
    socket.emit("left", {
      username: username,
    });
  };
  //////SOCKET IO

  ///ComponentDidMount for classes
  useEffect(() => {
    socket = socketIOClient();
    socket.on("connected-users", (data) => {
      setConnectedUsers(data.connectedUsers);
    });
    return () => {
      if (user) left(user.username);
    };
  }, []);

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} left={left} />
      <Switch>
        <Route
          exact
          path="/signup"
          render={(props) => (
            <Signup setUser={setUser} {...props} join={join} />
          )}
        />
        <Route
          exact
          path="/login"
          render={(props) => <Login setUser={setUser} {...props} join={join} />}
        />
        <Route
          exact
          path="/"
          render={(props) => (
            <Home user={user} {...props} connectedUsers={connectedUsers} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
