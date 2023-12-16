import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function SignupForm({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(true);
  const [showPassword2, setShowPassword2] = useState(true);

  function changeHandler(event) {
    setFormData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  }

  function submitHandler(evt) {
    evt.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...formData,
    };
    console.log("printing account data");
    console.log(accountData);
    navigate("/dashboard");
  }

  return (
    <div>
      <div>
        <button>student</button>
        <button>Instructor</button>
      </div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="">
            <p>
              First Name <sup>*</sup>
            </p>
            <input
              type="text"
              required
              name="firstName"
              onChange={changeHandler}
              value={formData.firstName}
              placeholder="Enter first name"
            />
          </label>

          <label htmlFor="">
            <p>
              Last Name <sup>*</sup>
            </p>
            <input
              type="text"
              required
              name="lastName"
              onChange={changeHandler}
              value={formData.lastName}
              placeholder="Enter last name"
            />
          </label>
        </div>

        <label htmlFor="">
          <p>
            Email Address <sup>*</sup>
          </p>
          <input
            type="email"
            required
            name="email"
            onChange={changeHandler}
            value={formData.email}
            placeholder="Enter Email Address"
          />
        </label>
        <div>
          <label>
            <p>
              Create Password <sup>*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              required
              name="password"
              onChange={changeHandler}
              value={formData.password}
              placeholder="Enter Email Address"
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? (
                <AiOutlineEye></AiOutlineEye>
              ) : (
                <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
              )}
            </span>
          </label>

          <label>
            <p>
              Confirm Password <sup>*</sup>
            </p>
            <input
              type={showPassword2 ? "text" : "password"}
              required
              name="confirmPassword"
              onChange={changeHandler}
              value={formData.confirmPassword}
              placeholder="confirm Password"
            />
            <span onClick={() => setShowPassword2((prev) => !prev)}>
              {showPassword2 ? (
                <AiOutlineEye></AiOutlineEye>
              ) : (
                <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
              )}
            </span>
          </label>
        </div>
        <button>Create Account</button>
      </form>
    </div>
  );
}

export default SignupForm;
