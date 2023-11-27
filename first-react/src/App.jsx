import "./App.css";
import Greeter from "./Greeter";
import { Dog } from "./Dog";
import LoginForm from "./LoginForm";
import Die from "./Die";
import DiceRolls from "./DiceRolls";
import RandomPokemon from "./RandomPokemon";

// function Greeter() {
//   return <h1>Hello!</h1>;
// }
// function Dog() {
//   return <p>Woof!</p>;
// }

function App() {
  return (
    <>
      {/* <Greeter />
      <Dog />
      <LoginForm></LoginForm>
      <Die></Die> */}
      {/* <DiceRolls></DiceRolls> */}
      <RandomPokemon></RandomPokemon>
    </>
  );
}

export default App;
