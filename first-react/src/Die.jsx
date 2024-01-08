import "./die.css";

export default function Die() {
  const roll = Math.floor(Math.random() * 6) + 1;
  return <h1 className="die">Die Roll: {roll}</h1>;
}
