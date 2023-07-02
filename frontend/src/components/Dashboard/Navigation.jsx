import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  DarkThemeToggle,
  Dropdown,
  Navbar,
} from "flowbite-react";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { BsMoon, BsSun } from "react-icons/bs";
const Navigation = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (darkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
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
        <button
          className={`${darkMode && "text-white"} mr-4 px-2`}
          onClick={toggleDarkMode}
        >
          {darkMode ? <BsSun /> : <BsMoon />}
        </button>
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
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink to={"/users"}>
              <span>Users</span>
            </NavLink>
          </Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
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
