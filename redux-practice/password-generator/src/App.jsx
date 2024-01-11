import { useSelector } from "react-redux";
import "./App.css";
import { useDispatch } from "react-redux";
import { setPassword } from "./redux/slices/PasswordSlice";
import generateRandomPassword from "./index";
import shufflePassword from "./index";
import { MdContentCopy } from "react-icons/md";

function App() {
  const dispatch = useDispatch();
  const password = useSelector((state) => state.password.value);

  async function copyPass() {
    await navigator.clipboard.writeText(password);
    console.log(password);
  }

  return (
    <div className="w-full h-screen flex flex-col items-start justify-center">
      <h1>Generate Password</h1>
      <div>
        {password}{" "}
        <MdContentCopy
          onClick={copyPass}
          className="cursor-pointer"
        ></MdContentCopy>
      </div>
      <button onClick={() => dispatch(setPassword(shufflePassword()))}>
        Generate
      </button>
    </div>
  );
}

export default App;
