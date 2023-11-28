import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserName from "./Username";
import SignupForm from "./SignupForm";
import ShoppingListForm from "./ShoppingList";
import ShoppingItems from "./ShoppingItems";

function App() {
  // return <SignupForm></SignupForm>;
  return (
    <div>
      {/* <ShoppingListForm></ShoppingListForm> */}
      <ShoppingItems></ShoppingItems>
    </div>
  );
}

export default App;
