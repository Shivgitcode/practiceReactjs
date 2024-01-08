import { useSelector } from "react-redux";
import "./App.css";
import { useDispatch } from "react-redux";
import { setPassword } from "./redux/slices/PasswordSlice";
import generateRandomPassword from "./index";

function App() {

 
  const dispatch = useDispatch();
  const password = useSelector((state) => state.password.value);

  return (
    <div>
      <span>{password}</span>
      <button onClick={() => dispatch(setPassword(generateRandomPassword()))}>
        Generate
      </button>
    </div>
  );
}

export default App;
