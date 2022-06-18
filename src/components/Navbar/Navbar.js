import React from "react";
import { Link } from "react-router-dom";
import { NavbarWrapper, Logo, NavItem } from "./Navbar.styled.js";

const categories = ["ChainSaws", "Bulldozers"];

function Navbar() {
  return (
    <NavbarWrapper>
      <Logo>Objector</Logo>
      <NavItem
      >
       <Link to={`/All`} >All</Link>  
      </NavItem>
      {categories.map((category, index) => {
        return (
          <NavItem
            key={index}
          >
            <Link to={`/category/${category}`} > {category} </Link>
          </NavItem>
        );
      })}
      <NavItem
      >
        <Link to="/ManageCategories"> Manage categories </Link>
      </NavItem>
    </NavbarWrapper>
  );
}

export default Navbar;
