import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useAuth } from "../../App";
import logo from "../../images/logo.svg";
import "./Header.css";

const Header = () => {
  const { currentUser, isAdmin } = useAuth();

  return (
    <header>
      <Navbar bg="light" expand="lg" className="main-menu">
        <Link className="navbar-brand py-0">
          <img src={logo} alt="" className="mr-2" /> NOUKA BAICH
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mt-2 mt-lg-0">
            <NavLink exact to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <HashLink smooth to="/#boat" className="nav-link">
              Boat
            </HashLink>
            {currentUser ? (
              isAdmin ? (
                <NavLink to="/dashboard" className="nav-link">
                  Dashboard ({currentUser.displayName})
                </NavLink>
              ) : (
                <NavLink to="/dashboard/bookings" className="nav-link">
                  Dashboard ({currentUser.displayName})
                </NavLink>
              )
            ) : (
              <NavLink to="/login" className="nav-link">
                Login/SignUp
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
