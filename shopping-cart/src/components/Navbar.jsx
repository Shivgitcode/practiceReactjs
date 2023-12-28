import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/react.svg";
import { NavLink } from "react-router-dom";

export default function () {
  return (
    <div className="flex flex-row justify-between">
      <NavLink to="/">
        <div>
          <img src={logo} alt="" />
        </div>
      </NavLink>
      <div>
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/cart">
          <p>
            <FaShoppingCart></FaShoppingCart>
          </p>
        </NavLink>
      </div>
    </div>
  );
}
