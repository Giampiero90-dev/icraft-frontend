import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import Logo from "../../logo/icraft-copy.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar
      style={{
        backgroundColor: "#36b8cf",
        fontSize: 30,
        fontWeight: "bold",
      }}
      //   bg="dark"
      variant="dark"
      expand="lg"
    >
      <Navbar.Brand as={NavLink} to="/">
        <img
          src={Logo}
          width={140}
          height={70}
          className="d-inline-block align-top"
          alt="icraft logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Home" />
          {/* {token ? (
            <NavbarItem path="/addcreation" linkText="Add your creation" />
          ) : null} */}
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
