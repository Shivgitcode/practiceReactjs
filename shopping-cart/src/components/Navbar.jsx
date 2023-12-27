import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/react.svg";
import { Navlink } from "react-router-dom";

export default function () {
  return (
    <div className="flex flex-row justify-between">
      <Navlink to="/">
        <div>
          <img src={logo} alt="" />
        </div>
      </Navlink>
      <div>
        <Navlink to="/">
          <p>Home</p>
        </Navlink>
        <Navlink to="/cart">
          <p>
            <FaShoppingCart></FaShoppingCart>
          </p>
        </Navlink>
      </div>
    </div>
  );
}
