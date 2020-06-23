import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";
import Home from "./components/Home";

function App(props) {
  const [user, setUser] = useState(props.user);
  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      <Switch>
        <Route
          exact
          path="/signup"
          render={(props) => <Signup setUser={setUser} {...props} />}
        />
        <Route
          exact
          path="/login"
          render={(props) => <Login setUser={setUser} {...props} />}
        />
        <Route
          exact
          path="/"
          render={(props) => <Home user={user} {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
