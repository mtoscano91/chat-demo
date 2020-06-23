import { useState } from "react";
import { signup, login } from "../services/auth";

//we receive the setUser and history from the componets so we dont have to have a middle function between the component and the hook itself.
export default function useAuth(initialState, setUser, history) {
  const [form, setForm] = useState(initialState);
  const { username, password, message } = form;

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  async function handleSignup(e) {
    e.preventDefault();

    const data = await signup(username, password);
    afterAuth(data);
  }

  async function handleLogin(e) {
    e.preventDefault();

    const data = await login(username, password);
    afterAuth(data);
  }

  // this function doesnt do much, besides keeping our code DRY. This way we dont need to repeat this logic twice. Thats just it. Theres no other reason for it to exist
  function afterAuth(data) {
    if (data.message) {
      setForm({
        ...form,
        message: data.message,
      });
    } else {
      setUser(data);
      history.push("/");
    }
  }

  return {
    username,
    password,
    message,
    handleSignup,
    handleChange,
    handleLogin,
  };
}
