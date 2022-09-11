import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Header() {
  return (
    <div className="header">
      {" "}
      <Navbar
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.117)",
        }}
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/">myDurbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="/">Artist Login</Nav.Link> */}
              <Nav.Link href="/bookartist">Artist Search</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/">Contact US</Nav.Link>
              {/* <Nav.Link eventKey={2} href="#memes">
                Terms & Conditions
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
