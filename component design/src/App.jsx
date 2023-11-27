import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Die from "./Die";
import Dice from "./Dice";
import LuckyN from "./LuckyN";
import { sum } from "./utils";
import Box from "./Box";

// function lessThan4(dice, goal) {
//   return sum(dice) < goal;
// }

// function allSameValue(dice) {
//   return dice.every((v) => v === dice[0]);
// }

function App() {
  const values = [true, true, true, true, true, true];
  const arr = [1, 2, 3, 5, 6, 7, 87, 20, 50];
  const newarr = arr.map((el) => {
    if (el > 10) {
      return el;
    }
  });
  return (
    <div>
      {/* <Dice die={[1, 2, 3, 4, 5]}></Dice> */}
      {/* <LuckyN numdice={2} func={allSameValue}></LuckyN> */}
      <Box val={values} />
    </div>
  );
}

export default App;
