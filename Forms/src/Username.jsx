import { useState } from "react";
export default function UserName() {
  const [username, setUsername] = useState("timmy");
  const updateUsername = (evt) => {
    console.log(evt.target.value);
    setUsername(evt.target.value);
  };
  return (
    <div>
      <label htmlFor="hello">username</label>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={updateUsername}
        id="hello"
      />
      <button>submit</button>
    </div>
  );
}
