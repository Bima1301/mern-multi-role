import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  DarkThemeToggle,
  Dropdown,
  Navbar,
} from "flowbite-react";
import Logo from "../../assets/logo.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { BsMoon, BsSun } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../../features/authSlice.js";
import DarkModeButton from "../DarkModeButton";
const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  console.log("location", location);

  function handleLogout() {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  }

  return (
    <Navbar fluid className="shadow-md sticky top-0 transition-background">
      <NavLink to={"/"}>
        <Navbar.Brand>
          <img alt="Logo" className="mr-3 h-6 sm:h-9" src={Logo} />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            VI Apps
          </span>
        </Navbar.Brand>
      </NavLink>
      <div className="flex md:order-2">
        <DarkModeButton />
        <Dropdown
          inline
          label={
            <>
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            </>
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{user?.data.name}</span>
            <span className="block truncate text-sm font-medium">
              {user?.data.email}
            </span>
          </Dropdown.Header>
          {user?.data.role === "admin" && (
            <NavLink to={"/dashboard/users"}>
              <Dropdown.Item>
                <span>Users</span>
              </Dropdown.Item>
            </NavLink>
          )}
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={location.pathname === "/dashboard"}>
          <NavLink to="/dashboard">Home</NavLink>
        </Navbar.Link>
        <Navbar.Link active={location.pathname === "/dashboard/about"}>
          <NavLink to="/dashboard/about">About</NavLink>
        </Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
