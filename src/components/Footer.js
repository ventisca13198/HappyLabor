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
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaLinkedinIn, FaFacebookF, FaLine } from "react-icons/fa";

const Styles = styled.div`
  .text-nav {
    textdecoration: none;
    color: #fff;
  }
`;

export default class Footer extends Component {
  render() {
    return (
      <Styles>
        <div
          style={{
            backgroundColor: "#003b5a",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <Row
            className="text-lg-left text-xl-left"
            style={{ paddingBottom: 50 }}
          >
            <Col lg={2}></Col>
            <Col lg style={{ marginRight: 50, marginLeft: 50, marginTop: 40 }}>
              <Link to="/home">
                <Image src="./images/logo.png" style={{ marginBottom: 25 }} />
              </Link>
              <div>
                <strong>“By foreigners for foreigners”</strong>
              </div>
              <div>
                Jobs in Japan has been a key resource for foreigners looking for
                work in Japan since 1998.
              </div>
            </Col>
            <Col lg style={{ marginTop: 40 }}>
              <Row
                style={{
                  marginBottom: 25,
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#007ec3",
                }}
              >
                <Col>For Candidates</Col>
              </Row>
              <Row>
                <Col>
                  <Link to="/home" className="text-nav">
                    Home
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>About us</Col>
              </Row>
              <Row>
                <Col>Contact us</Col>
              </Row>
              <Row>
                <Col>FAQ</Col>
              </Row>
              <Row>
                <Col>Blog</Col>
              </Row>
            </Col>
            <Col lg style={{ marginTop: 40 }}>
              <Row
                style={{
                  marginBottom: 25,
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#007ec3",
                }}
              >
                <Col>For Employers</Col>
              </Row>
              <Row>
                <Col>Register</Col>
              </Row>
              <Row>
                <Col>Employers</Col>
              </Row>
              <Row>
                <Col>Prices</Col>
              </Row>
              <Row>
                <Col>Users Guide to JobsinJapan.com</Col>
              </Row>
              <Row>
                <Col>Website Terms of Use</Col>
              </Row>
              <Row>
                <Col>Privacy Policy</Col>
              </Row>
              <Row>
                <Col>Commercial Act</Col>
              </Row>
            </Col>
            <Col lg style={{ marginTop: 40 }}>
              <Row
                style={{
                  marginBottom: 25,
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#007ec3",
                }}
              >
                <Col>Contact Us</Col>
              </Row>
              <Row>
                <Col>Spectrum Consulting Japan G.K.</Col>
              </Row>
              <Row>
                <Col>
                  Tokyo Office: C/O Global Village Media 1-7-20-B2 Yaesu,
                  Chuo-ku, Tokyo
                </Col>
              </Row>
              <Row>
                <Col>info@jobsinjapan.com</Col>
              </Row>
              <Row style={{ marginTop: 20 }}>
                <Col>
                  <div
                    style={{
                      backgroundColor: "#fff",
                      display: "inline-grid",
                      padding: 10,
                      borderRadius: 50,
                      marginRight: 10,
                    }}
                  >
                    <FaFacebookF color={"#003b5a"} size={20} />
                  </div>
                  <div
                    style={{
                      backgroundColor: "#fff",
                      display: "inline-grid",
                      padding: 10,
                      borderRadius: 50,
                      marginRight: 10,
                    }}
                  >
                    <FaLinkedinIn color={"#003b5a"} size={20} />
                  </div>
                  <div
                    style={{
                      backgroundColor: "#fff",
                      display: "inline-grid",
                      padding: 10,
                      borderRadius: 50,
                      marginRight: 10,
                    }}
                  >
                    <FaLine color={"#003b5a"} size={20} />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={2}></Col>
          </Row>
          <div
            style={{
              backgroundColor: "#042c41",
              textAlign: "center",
              fontSize: 10,
              paddingBottom: 10,
              paddingTop: 10,
            }}
          >
            2019 Owned and operated by Spectrum Consulting Japan G.K.
          </div>
        </div>
      </Styles>
    );
  }
}
