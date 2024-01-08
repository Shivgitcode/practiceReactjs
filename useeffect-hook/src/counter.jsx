import { useEffect, useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(function myeffect() {
    console.log("My Effect Was called!");
  }, []);
  const increment = () => {
    setCount((c) => c + 1);
  };
  const handleChange = (evt) => {
    setName((newName) => {
      newName = evt.target.value;
      return newName;
    });
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
      <input type="text" name="" id="" value={name} onChange={handleChange} />
    </div>
  );
}
