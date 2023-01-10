import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Entete = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto Nav">
              <Navbar.Brand
                href="#hom
              e"
              >
                <img
                  height="33px"
                  width="auto"
                  src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
                  alt=""
                />
              </Navbar.Brand>
              <div style={{ display: "flex" }}>
                <Nav.Link href="#home">About us</Nav.Link>
                <Nav.Link href="#link">Career</Nav.Link>
                <NavDropdown title="Départements" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Marketing & PR
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Customer Success & Sales
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    IT,Product,Data
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.4">
                    Finance & Administration
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    HR & more
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Entete;
