import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

export const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState("false");
  function changeHandler(event) {
    setFormData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  }

  function submitHandler(evt) {
    evt.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }
  return (
    <form onSubmit={submitHandler}>
      <label>
        <p>
          Email Address <sup>*</sup>
        </p>
        <input
          type="text"
          required
          onChange={changeHandler}
          value={formData.email}
          placeholder="Enter email id"
          name="email"
        />
      </label>
      <label>
        <p>
          Email Address <sup>*</sup>
        </p>
        <input
          type={showPassword ? "text" : "password"}
          required
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter password"
          name="password"
        />
        <span onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? (
            <AiOutlineEye></AiOutlineEye>
          ) : (
            <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
          )}
        </span>
        <Link to="#">
          <p>Forgot Password</p>
        </Link>
      </label>
      <button>Sign In</button>
    </form>
  );
};
