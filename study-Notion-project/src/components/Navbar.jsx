import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="flex justify-between item-center w-11/12 max-w-[1160px] py-4 mx-auto ">
      <Link to="/">
        <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
      </Link>
      <nav>
        <ul className="flex gap-x-3 text-white ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex mr-3 ml-5 gap-3">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-richblack-800 tex-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700 text-white">
              Login
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="bg-richblack-800 tex-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700 text-white">
              signup
              <Toaster></Toaster>
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              className="bg-richblack-800 tex-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700 text-white"
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              Log Out
              <Toaster></Toaster>
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
