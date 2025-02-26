import React from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Recommended from "./components/Recommended";
import Product from "./components/Product";

const App = () => {
  return (
    <>
      <SideBar />
      <NavBar />
      <Recommended />
      <Product />
    </>
  );
};

export default App;
