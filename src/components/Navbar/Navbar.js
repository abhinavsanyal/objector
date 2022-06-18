import React from 'react';

import {NavbarWrapper, Logo, NavItem} from "./Navbar.styled.js";

const categories = ["ChainSaws","Bulldozers"];

function Navbar() {
  return (
    <NavbarWrapper>
        <Logo>Objector</Logo>
        <NavItem>All</NavItem>
        {categories.map((category, index)=>{
          return <NavItem key={index}> {category} </NavItem>
        })}
        <NavItem>Manage categories</NavItem>

    </NavbarWrapper>
  )
}

export default Navbar