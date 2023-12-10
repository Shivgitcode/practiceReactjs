import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState({ firstname: "", lastname: "" });

  function handleChange(event) {
    const fname = event.target.name;

    setInput((prev) => {
      prev[fname] = event.target.value;
      return { ...prev };
    });
    console.log(input);
  }
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="first name"
          name="firstname"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="last name"
          name="lastname"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default App;
