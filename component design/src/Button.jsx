import "./Button.css";

export default function Button({ click }) {
  return (
    <button className="button" onClick={click}>
      re-roll
    </button>
  );
}
