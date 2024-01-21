import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to={"/add"}>ADD</NavLink>
      <NavLink to={"/edit"}>EDIT</NavLink>
      <NavLink to={"/products"}>PRODUCTS</NavLink>
    </div>
  );
};

export default Navbar;
