import { useSelector } from "react-redux";
import "./App.css";
import CounterSlice from "./redux/slices/CounterSlice";
import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/slices/CounterSlice";

function App() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1>Counter app</h1>
      <div className="flex w-[100px] justify-between items-center">
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{value}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
}

export default App;
