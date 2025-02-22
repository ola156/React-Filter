import React from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Recommended from "./components/Recommended";
import Product from "./components/Product";

const App = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <Recommended />
      <Product />
    </>
  );
};

export default App;
