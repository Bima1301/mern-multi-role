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
          {user?.data.role.name === "admin" && (
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
        <NavLink
          className={`block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white ${
            location.pathname === "/dashboard"
              ? "dark:text-white text-cyan-700 "
              : "text-gray-700 dark:text-gray-400 "
          }}`}
          to="/dashboard"
        >
          Home
        </NavLink>
        <NavLink
          className={`block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white ${
            location.pathname === "/dashboard/about"
              ? "dark:text-white text-cyan-700 "
              : "text-gray-700 dark:text-gray-400 "
          }}`}
          to="/dashboard/about"
        >
          About
        </NavLink>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
