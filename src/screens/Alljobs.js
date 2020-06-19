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
  Card,
} from "react-bootstrap";
import {
  FaBook,
  FaDollarSign,
  FaInfo,
  FaShareAlt,
  FaHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { jobs } from "../data";
import { BsBookmarkFill, BsGeoAlt } from "react-icons/bs";
export default class Alljobs extends Component {
  render() {
    return (
      <div>
        <div style={{ height: 170, backgroundColor: "#c55" }}></div>
        <div style={{ backgroundColor: "#ccc" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 20,
              marginTop: 20,
            }}
          >
            <Row style={{ maxWidth: 1200 }}>
              <Col>
                <Form style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                  <Row
                    lg
                    style={{
                      paddingTop:50,
                      paddingLeft: 5,
                      paddingRight: 5,
                      textAlign: "-webkit-center",
                    }}
                  >
                    <Form.Group
                      controlId="formBasicPassword"
                      style={{ maxWidth: 300 }}
                    >
                      <Form.Control placeholder="Keyword" />
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicPassword"
                      style={{ maxWidth: 300 }}
                    >
                      <Form.Control placeholder="Job Category" />
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicPassword"
                      style={{ maxWidth: 300 }}
                    >
                      <Form.Control placeholder="Job Location" />
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      size="md"
                      block
                      style={{ maxWidth: 300 }}
                    >
                      Search
                    </Button>
                  </Row>
                </Form>
              </Col>
              <Col
                lg={8}
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: 20,
                }}
              >
                {jobs.map((job) => (
                  <Card
                    style={{
                      alignSelf: "center",
                      marginTop: 20,
                      paddingBottom: 10,
                    }}
                  >
                    <Image
                      src={job.banner}
                      style={{
                        display: "block",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                    <div
                      style={{
                        paddingLeft: 15,
                        paddingRight: 15,
                        marginTop: 10,
                      }}
                    >
                      <p>
                        <span style={{ fontSize: 18, fontWeight: "bold" }}>
                          {job.position}
                        </span>
                        <span
                          className="text-job-list"
                          style={{
                            fontSize: 15,
                            marginTop: 5,
                            marginBottom: 5,
                          }}
                        >
                          {job.companyName}
                        </span>
                        <span className="text-job-list">
                          <div>
                            <BsBookmarkFill className="icon-job-list" />
                          </div>
                          <div>{job.jobType}</div>
                        </span>
                        <span className="text-job-list">
                          <div>
                            <BsGeoAlt className="icon-job-list" />
                          </div>
                          <div>{job.provinceTh}</div>
                        </span>
                        <span className="text-job-list">
                          <div>
                            <FaBook className="icon-job-list" />
                          </div>
                          <div>{job.jobCategory}</div>
                        </span>
                        <span className="text-job-list">
                          <div>
                            <FaDollarSign className="icon-job-list" />
                          </div>
                          <div>{job.jobOverview.salary}</div>
                        </span>
                        <span className="text-job-list">
                          <div>
                            <FaInfo className="icon-job-list" />
                          </div>
                          <div>{job.info}</div>
                        </span>
                        <span></span>
                      </p>
                    </div>
                    <Row style={{ paddingLeft: 15, paddingRight: 15 }}>
                      <Col>
                        <FaHeart />
                        <span className="iconBottom">Save</span>
                        <FaShareAlt />
                        <span className="iconBottom">Share</span>
                      </Col>
                      <Col style={{ textAlign: "end" }}>
                        <Link to="/detail">
                          <Button size={"md"} style={{ fontWeight: "bold" }}>
                            Detail
                          </Button>
                        </Link>
                        <div style={{ fontSize: 12 }}>6 hours ago</div>
                      </Col>
                    </Row>
                  </Card>
                ))}
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
