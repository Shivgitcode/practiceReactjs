import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    comment: "",
    isVisible: true,
    mode: "",
    favCar: "",
  });

  function handleChange(event) {
    event.preventDefault();
    // const fname = event.target.name;
    const { name, value, checked, type } = event.target;

    setInput((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
    console.log(input);
  }

  function SubmitHandler(event) {
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={SubmitHandler}>
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

        <br />
        <br />

        <input
          type="radio"
          onChange={handleChange}
          name="mode"
          value="Online Mode"
          id="Online-Mode"
          checked={input.mode === "Online Mode"}
        />
        <label htmlFor="Offline-Mode">Offline mode</label>
        <input
          type="radio"
          onChange={handleChange}
          name="mode"
          value="Offline Mode"
          id="Offline-Mode"
          checked={input.mode === "Offline Mode"}
        />
        <label htmlFor="Offline-Mode">Online mode</label>
        <select
          onChange={handleChange}
          name="favCar"
          id="fav-car"
          value={input.favCar}
        >
          <option value="Bmw">Bmw</option>
          <option value="thar">thar</option>
          <option value="audi">audi</option>
          <option value="fortuner">fortuner</option>
          <option value="mercedes">mercedes</option>
          <option value="pagani">pagani</option>
        </select>

        <label htmlFor="fav-car">Cars</label>

        {/* <input type="submit" value /> */}
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
