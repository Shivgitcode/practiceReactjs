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
        <div className="">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              name="firstName"
              onChange={changeHandler}
              value={formData.firstName}
              placeholder="Enter first name"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>

          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              name="lastName"
              onChange={changeHandler}
              value={formData.lastName}
              placeholder="Enter last name"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>
        </div>

        <label className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            type="email"
            required
            name="email"
            onChange={changeHandler}
            value={formData.email}
            placeholder="Enter Email Address"
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
          />
        </label>
        <div>
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              required
              name="password"
              onChange={changeHandler}
              value={formData.password}
              placeholder="Create Password"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] cursor-pointer "
            >
              {showPassword ? (
                <AiOutlineEye fontSize={24} fill="#AFB2BF"></AiOutlineEye>
              ) : (
                <AiOutlineEyeInvisible
                  fontSize={24}
                  fill="#AFB2BF"
                ></AiOutlineEyeInvisible>
              )}
            </span>
          </label>

          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              type={showPassword2 ? "text" : "password"}
              required
              name="confirmPassword"
              onChange={changeHandler}
              value={formData.confirmPassword}
              placeholder="confirm Password"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
            <span
              onClick={() => setShowPassword2((prev) => !prev)}
              className="absolute right-3 top-[68px] cursor-pointer "
            >
              {showPassword2 ? (
                <AiOutlineEye fontSize={24} fill="#AFB2BF"></AiOutlineEye>
              ) : (
                <AiOutlineEyeInvisible
                  fontSize={24}
                  fill="#AFB2BF"
                ></AiOutlineEyeInvisible>
              )}
            </span>
          </label>
        </div>
        <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 w-full">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
