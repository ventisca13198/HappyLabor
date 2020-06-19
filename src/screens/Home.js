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
import { Fade, Zoom } from "react-slideshow-image";
var images = [
  "images/bg1.jpg",
  "images/bg2.jpg",
  "images/bg3.jpg",
  "images/bg4.jpg",
];

const properties = {
  duration: 5000,
  transitionDuration: 1500,
  infinite: true,
  indicators: false,
  arrows: false,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

export default class Home extends Component {
  render() {
    return (
      <div>
        <Fade {...properties}>
          {images.map((each, index) => (
            <div
              style={{
                backgroundImage: `url(${each}) `,
                width: "100%",
                height: 700,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div
                style={{
                  top: 250,
                  position: "absolute",
                  color: "rgb(255, 255, 255)",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <Row style={{}}>
                  <Col
                    style={{
                      fontSize: 46,
                      fontWeight: "bold",
                      backgroundColor: "rgba(0,0,0,0.8)",
                    }}
                  >
                    Find your job in Thailand now!
                  </Col>
                </Row>
                <Row style={{ marginBottom: 15 }}>
                  <Col
                    style={{ fontSize: 22, backgroundColor: "rgba(0,0,0,0.8)" }}
                  >
                    Foreigner friendly jobs across all industries
                  </Col>
                </Row>

                <Form style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                  <Row>
                    <Col></Col>
                    <Col md style={{ paddingLeft: 5, paddingRight: 5 }}>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Control placeholder="Keyword" />
                      </Form.Group>
                    </Col>
                    <Col md style={{ paddingLeft: 5, paddingRight: 5 }}>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Control placeholder="Job Category" />
                      </Form.Group>
                    </Col>
                    <Col md style={{ paddingLeft: 5, paddingRight: 5 }}>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Control placeholder="Job Location" />
                      </Form.Group>
                    </Col>
                    <Col md style={{ paddingLeft: 5, paddingRight: 5 }}>
                      <Button variant="primary" type="submit" size="md" block>
                        Search
                      </Button>
                    </Col>
                    <Col></Col>
                  </Row>
                </Form>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    );
  }
}
