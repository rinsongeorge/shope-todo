import React from "react";
import "./App.scss";
// import { CssBaseline } from "@mui/material";
import MainAccordions from "./components/MainAccordions";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      {/* <CssBaseline /> */}
      <NavBar />
      <MainAccordions />
    </>
  );
}

export default App;
