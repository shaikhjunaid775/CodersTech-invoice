import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/logo.png";

function Header() {
  return (
    <Navbar className=" ">
      <Container>
        <Navbar.Brand className="d-flex justify-content-between w-100">
          <img
            alt=""
            src={logo}
            //   width="30"
            //   height="30"
            className="d-inline-block align-top"
          />{" "}
          <div>
            <div>
              Date : <span> {new Date().toLocaleDateString()} </span>{" "}
            </div>
            <div>Invoice No. : mlskd,</div>
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
