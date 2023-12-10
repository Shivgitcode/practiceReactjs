import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    comment: "",
    isVisible: true,
  });

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
          value={input.firstname}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="last name"
          name="lastname"
          value={input.lastname}
          onChange={handleChange}
        />

        <textarea
          name="comment"
          id=""
          cols="30"
          rows="10"
          onChange={handleChange}
          value={input.comment}
          placeholder="enter your comment"
        ></textarea>
        <br />
        <br />
        <br />

        <label htmlFor="isvisible">Am I visible</label>
        <input
          type="checkbox"
          onChange={handleChange}
          name="isVisible"
          id="isvisible"
          checked={input.isVisible}
        />
      </form>
    </div>
  );
}

export default App;
