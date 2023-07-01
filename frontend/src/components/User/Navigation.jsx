import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/logo.png";

const Navigation = () => {
  return (
    <Navbar fluid rounded>
      <NavLink to={"/"}>
        <Navbar.Brand>
          <img alt="Logo" className="mr-3 h-6 sm:h-9" src={Logo} />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            VI Apps
          </span>
        </Navbar.Brand>
      </NavLink>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
