import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
    console.log(input);
  }
  return (
    <div>
      <form>
        <input type="text" placeholder="first name" onChange={handleChange} />

        <input type="text" placeholder="last name" />
      </form>
    </div>
  );
}

export default App;
