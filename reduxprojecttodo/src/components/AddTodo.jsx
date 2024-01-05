import { addTodo } from "../features/todo/todoSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function addTodoHandler(e) {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  }
  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
}
