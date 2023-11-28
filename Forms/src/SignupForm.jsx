import { useState } from "react";
export default function SignupForm() {
  //   const [firstname, setFirstname] = useState("");
  //   const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState({
    firstName: "",
    LastName: "",
    Password: "",
  });
  //   const updateFirstname = (evt) => {
  //     console.log(evt.target.value);
  //     setFirstname(evt.target.value);
  //   };
  //   const updateLastname = (evt) => {
  //     console.log(evt.target.value);
  //     setLastname(evt.target.value);
  //   };
  const updateUsername = (evt) => {
    const name = evt.target.name;
    console.log(name);
    const value = evt.target.value;
    setUsername((userData) => {
      return {
        ...userData,
        [name]: value,
      };
      //   userData[name] = value;
      //   return { ...userData };
    });
  };
  return (
    <div>
      <label htmlFor="user1">username</label>
      <input
        type="text"
        placeholder="Firstname"
        value={username.firstName}
        onChange={updateUsername}
        name="firstName"
        id="user1"
        f
      />
      <label htmlFor="user2">username</label>
      <input
        type="text"
        placeholder="username"
        value={username.LastName}
        onChange={updateUsername}
        name="LastName"
        id="user2"
      />
      <input
        type="password"
        placeholder="password"
        value={username.Password}
        onChange={updateUsername}
        name="Password"
        id="user3"
      />
      <button>submit</button>
    </div>
  );
}
