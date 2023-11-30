import { useState } from "react";
import List from "@mui/material/List";
import TodoItem from "./todoItem";
import TodoForm from "./TodoForm";
import { useEffect } from "react";

export default function TodoList() {
  const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (!data) {
      return [];
    }
    return data;
  };
  const [todos, setTodos] = useState(getInitialData);
  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  };
  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: crypto.randomUUID(), text: text, completed: false },
      ];
    });
  };
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          ></TodoItem>
        );
      })}
      <TodoForm addTodo={addTodo}></TodoForm>
    </List>
  );
}

// export default function CheckboxList() {
//   const [checked, setChecked] = React.useState([0]);

//   const handleToggle = (value: number) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   return (
//     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       {[0, 1, 2, 3].map((value) => {
//         })}
//     </List>
//   );
// }
