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
    <div className="w-full h-screen flex flex-col items-start justify-center bg-[#264653] font-poppins">
      <div className=" ml-[200px] flex flex-col gap-7 items-start mb-10">
        <div>
          <h1 className="text-white text-[42px] text-left mb-5">
            Generate Password
          </h1>
          <div className="flex justify-between min-w-[500px] rounded-md items-center bg-white py-5 px-5 min-h-[64px]">
            <p>{password === "" ? "password" : password}</p>{" "}
            <MdContentCopy
              onClick={copyPass}
              className="cursor-pointer"
              fill="green"
            ></MdContentCopy>
          </div>
        </div>

        <button
          onClick={() => dispatch(setPassword(shufflePassword()))}
          className=" bg-green-600 px-8 py-3 text-white rounded"
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default App;
