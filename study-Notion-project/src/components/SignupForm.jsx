import { useState } from "react";

function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  }

  return (
    <div>
      <div>
        <button>student</button>
        <button>Instructor</button>
      </div>
      <form>
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
              type={showPassword ? "text" : "password"}
              required
              name="confirmPassword"
              onChange={changeHandler}
              value={formData.confirmPassword}
              placeholder="confirm Password"
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? (
                <AiOutlineEye></AiOutlineEye>
              ) : (
                <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
              )}
            </span>
          </label>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
