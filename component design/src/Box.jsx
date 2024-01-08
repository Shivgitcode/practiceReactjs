import { useState } from "react";
import Reset from "./Reset";

function Box({ val }) {
  const [color, setColor] = useState(val);
  function handleColor(index) {
    setColor((newColor) => {
      return newColor.map((el, i) => {
        if (index === i) {
          return !el;
        } else {
          return el;
        }
      });
    });
  }
  function reset() {
    console.log(val);
    setColor(val);
  }
  return (
    <div>
      {color.map((el, index) => {
        return (
          <div
            key={index}
            onClick={() => handleColor(index)}
            className={`w-[100px] h-[100px] inline-block ${
              el ? "bg-red-500" : "bg-black"
            } mr-4`}
          ></div>
        );
      })}
      <Reset onclick={reset}></Reset>
    </div>
  );
}

export default Box;
