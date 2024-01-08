import { useNavigate } from "react-router-dom";

const Support = () => {
  const navlink = useNavigate();
  function clickHandler() {
    navlink("/");
  }
  return (
    <div>
      support
      <button onClick={clickHandler}>Move to home page</button>
    </div>
  );
};

export default Support;
