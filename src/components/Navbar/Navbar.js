import React from "react";
import { Link } from "react-router-dom";
import { NavbarWrapper, Logo, NavItem } from "./Navbar.styled.js";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { categories } = useSelector((state) => state);
  return (
    <NavbarWrapper>
      <Logo>Objector</Logo>
      <NavItem>
        <Link to={`/All`}>All</Link>
      </NavItem>
      {categories.map((category, index) => {
        return (
          <NavItem key={index}>
            <Link to={`/category/${category}`}> {category} </Link>
          </NavItem>
        );
      })}
      <NavItem>
        <Link to="/ManageCategories"> Manage categories </Link>
      </NavItem>
    </NavbarWrapper>
  );
};

export default Navbar;
