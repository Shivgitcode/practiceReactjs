import Template from "./template";
import loginImg from "../assets/login.png";

const Login = ({ setIsLoggedIn }) => {
  return (
    <div>
      <Template
        title="Welcome Back"
        desc1="Build skills for today,tomorrow,and beyond"
        desc2="Education to future-proof your carrer."
        image={loginImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
      ></Template>
    </div>
  );
};

export default Login;
