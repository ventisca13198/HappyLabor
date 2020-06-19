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
                <Image
                  src="images/logo5_cr.png"
                  style={{ marginBottom: 25, height: "40px" }}
                />
              </Link>
              <div>
                <strong>“By foreigners for foreigners”</strong>
              </div>
              <div>
                Jobs in Thailand has been a key resource for foreigners looking for
                work in Thailand since 2020.
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
                <Col>Users Guide to HappyWorker.com</Col>
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
                <Col>Chan Wanich Co., Ltd.</Col>
              </Row>
              <Row>
                <Col>
                  Kongboonma Building 699 Silom Rd. Bangrak, Bangkok 10500 Tel.
                  (+66) 2-635-3555 Fax (+66) 2-635-3398
                </Col>
              </Row>
              <Row>
                <Col>http://www.si.chanwanich.com/</Col>
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
