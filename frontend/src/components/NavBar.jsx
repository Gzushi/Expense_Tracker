import React from "react";
import { Navbar } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="#">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          MyApp
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <button
          onClick={() => navigate("/login")}
          className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/home" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;