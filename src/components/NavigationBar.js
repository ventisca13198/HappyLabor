import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Image,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactCountryFlag from "react-country-flag";

const Styles = styled.div`
  .text-nav {
    textdecoration: none;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
  }

  .navbar-toggler {
    border: 1px solid white;
  }

  .text-country-selected {
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    padding-left: 10px;
    padding-right: 5px;
  }

  .text-country {
    font-size: 1rem;
    font-weight: bold;
    padding-left: 10px;
    padding-right: 5px;
  }

  .dropdown-toggle {
    border: none;
    outline: none;
    text-decoration: none;
  }

  .navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }
`;

export default class NavigationBar extends Component {
  render() {
    return (
      <Styles>
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0)",
            position: "absolute",
            top: 0,
            width: "100%",
            zIndex: 99999,
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.2)",
              width: "100%",
              paddingLeft: "10%",
              paddingRight: "10%",
            }}
          >
            <Row>
              <Col style={{ left: 20, color: "#fff" }}>
                <div
                  style={{
                    backgroundColor: "rgba(0,0,0,.2)",
                    display: "inline-flex",
                    padding: 10,
                  }}
                >
                  Employers/จัดหาคนเข้าทำงาน
                </div>
              </Col>
              <Col style={{ textAlign: "right", right: 20 }}>
                <Dropdown>
                  <Dropdown.Toggle variant="link" id="dropdown-basic">
                    <ReactCountryFlag countryCode="TH" svg />
                    <span className="text-country-selected">ไทย</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      <ReactCountryFlag countryCode="TH" svg />
                      <span className="text-country">ไทย</span>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <ReactCountryFlag countryCode="US" svg />
                      <span className="text-country">English</span>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      <ReactCountryFlag countryCode="LA" svg />
                      <span className="text-country">ລາວ</span>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-4">
                      <ReactCountryFlag countryCode="MY" svg />
                      <span className="text-country">မြန်မာဘာသာ</span>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-5">
                      <ReactCountryFlag countryCode="KH" svg />
                      <span className="text-country">ភាសាខ្មែរ</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </div>

          <Navbar
            expand="lg"
            style={{ paddingLeft: "11%", paddingRight: "11%" }}
          >
            <Navbar.Brand>
              <Link to="/home">
                <Image
                  src="images/logo5_cr.png"
                  rounded
                  style={{ height: "70px" }}
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <Nav.Link>
                  <Link to="/jobs" className="text-nav">
                    JOBS
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/company" className="text-nav">
                    BUSINESS-OWNER
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/detail" className="text-nav">
                    NEWS
                  </Link>
                </Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </Styles>
    );
  }
}
