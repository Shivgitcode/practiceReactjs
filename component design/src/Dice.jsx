import Die from "./Die";

export default function Dice({ die }) {
  return die.map((el, index) => {
    return <Die key={index} val={el}></Die>;
  });
}
