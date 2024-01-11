import { useSelector } from "react-redux";
import "./App.css";
import { useDispatch } from "react-redux";
import { setPassword } from "./redux/slices/PasswordSlice";
import generateRandomPassword from "./index";
import shufflePassword from "./index";

function App() {
  const dispatch = useDispatch();
  const password = useSelector((state) => state.password.value);

  return (
    <div>
      <h1>Generate Password</h1>
      <div>{password}</div>
      <button onClick={() => dispatch(setPassword(shufflePassword()))}>
        Generate
      </button>
    </div>
  );
}

export default App;
