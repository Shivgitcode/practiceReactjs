import { useState } from "react";
import { getRolls, sum } from "./utils";
import Dice from "./Dice";
import Button from "./Button";

function LuckyN({ numdice = 2, goal = 7, func }) {
  const [dice, setDice] = useState(getRolls(numdice));
  const isWin = func(dice);
  function reRoll() {
    setDice((newDice) => {
      newDice = getRolls(numdice);
      return newDice;
    });
  }
  return (
    <main>
      <h1>
        Lucky{goal} {isWin && "You Win"}
      </h1>
      <Dice die={dice}></Dice>
      <Button click={reRoll}></Button>
    </main>
  );
}

export default LuckyN;
