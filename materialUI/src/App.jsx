import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import Typography from "@mui/material/Typography";
import RatingDemo from "./RatingDemo";

import "./App.css";

function App() {
  return (
    <div>
      {/* <Button variant="contained" size="large" color="success">
        Contained
      </Button> */}
      {/* <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton> */}
      <RatingDemo></RatingDemo>
    </div>
  );
}

export default App;
