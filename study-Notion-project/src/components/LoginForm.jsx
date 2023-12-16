import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const { formData, setFormData } = useState({ email: "", password: "" });
  const { showPassword, setShowPassword } = useState("false");
  function changeHandler(event) {
    setFormData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  }
  return (
    <form>
      <label htmlFor="">
        <p>
          Email Address <sup>*</sup>
        </p>
        <input
          type="email"
          required
          onChange={changeHandler}
          value={formData.email}
          placeholder="Enter email id"
          name="email"
        />
      </label>
      <label htmlFor="">
        <p>
          Email Address <sup>*</sup>
        </p>
        <input
          type={showPassword ? "text" : "password"}
          required
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter email id"
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
