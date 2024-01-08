import { Outlet } from "react-router-dom";

const MainHeading = () => {
  return (
    <div>
      {" "}
      <Outlet />
    </div>
  );
};

export default MainHeading;
