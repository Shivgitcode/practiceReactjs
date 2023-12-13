import "./App.css";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Support from "./components/support";
import About from "./components/about";
import MainHeading from "./components/Mainheading";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainHeading></MainHeading>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/support" element={<Support></Support>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
