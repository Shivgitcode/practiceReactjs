import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import { LoginForm } from "./LoginForm";
const Template = ({ title, desc1, desc2, image, setIsLoggedIn, formtype }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>
        {formtype === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>
        )}
        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <button>
          <p>Sign Up with Google</p>
        </button>
      </div>
      <div>
        <img
          src={image}
          alt="Pattern"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          src={image}
          alt="Students"
          width={558}
          height={490}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Template;