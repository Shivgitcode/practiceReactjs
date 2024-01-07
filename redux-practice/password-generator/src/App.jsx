import { useSelector } from "react-redux";
import "./App.css";
import { useDispatch } from "react-redux";
import { setPassword } from "./redux/slices/PasswordSlice";

function App() {
  function generateRandomNumber(length) {
    let passwd = "";
    for (let i = 1; i <= length; i++) {
      let randomNumber = Math.floor(Math.random() * 100) + 1;
      passwd += randomNumber.toString();
    }
    return passwd;
  }
  const dispatch = useDispatch();
  const password = useSelector((state) => state.password.value);

  return (
    <div>
      <span>{password}</span>
      <button onClick={() => dispatch(setPassword(generateRandomNumber(10)))}>
        Generate
      </button>
    </div>
  );
}

export default App;
