import React, { Component } from "react";
import { Form, Button, Image, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import styled from "styled-components";
import { BsBookmarkFill, BsGeoAlt } from "react-icons/bs";
import {
  FaBook,
  FaDollarSign,
  FaInfo,
  FaShareAlt,
  FaHeart,
} from "react-icons/fa";
import { jobs } from "../data";
var images = [
  "images/bg1.jpg",
  "images/bg2.jpg",
  "images/bg3.jpg",
  "images/bg4.jpg",
];

const Styles = styled.div`
  .icon-job-list {
    margin-right: 5px;
  }
  .text-job-list {
    font-size: 14px;
    width: 95%;
    display: inline-flex;
  }
  .iconBottom {
    padding-left: 5px;
    padding-right: 15px;
  }
  .text-news {
    text-align: left;
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
  }
  .populay-jobs {
    width: 95%;
    height: 177px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
  }
  .span-pop {
    background-color: rgba(0, 0, 0, 0.5);
    white-space: pre-wrap;
    width: 100%;
    height: 100%;
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  html,
  body {
    overflow: hidden;
  }
  body {
    -webkit-overflow-scrolling: touch;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

const properties = {
  duration: 5000,
  transitionDuration: 2000,
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
      <Styles>
        <div style={{ overflow: "hidden", width: "100%" }}>
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
                  overflow: "hidden",
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
                      style={{
                        fontSize: 22,
                        backgroundColor: "rgba(0,0,0,0.8)",
                      }}
                    >
                      Foreigner friendly jobs across all industries
                    </Col>
                  </Row>

                  <Form style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                    <Row style={{}}>
                      <Col></Col>
                      <Col
                        lg
                        style={{
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
                      </Col>
                      <Col
                        lg
                        style={{
                          paddingLeft: 5,
                          paddingRight: 5,
                          textAlign: "-webkit-center",
                        }}
                      >
                        <Form.Group
                          controlId="formBasicPassword"
                          style={{ maxWidth: 300 }}
                        >
                          <Form.Control placeholder="Job Category" />
                        </Form.Group>
                      </Col>
                      <Col
                        lg
                        style={{
                          paddingLeft: 5,
                          paddingRight: 5,
                          textAlign: "-webkit-center",
                        }}
                      >
                        <Form.Group
                          controlId="formBasicPassword"
                          style={{ maxWidth: 300 }}
                        >
                          <Form.Control placeholder="Job Location" />
                        </Form.Group>
                      </Col>
                      <Col
                        lg
                        style={{
                          paddingLeft: 5,
                          paddingRight: 5,
                          textAlign: "-webkit-center",
                        }}
                      >
                        <Button
                          variant="primary"
                          type="submit"
                          size="md"
                          block
                          style={{ maxWidth: 300 }}
                        >
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
          <div
            style={{
              backgroundImage: `url(images/banner-home-icons-bg.jpg) `,
              width: "100%",
              height: 400,
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "100%" }}>
              <Row
                style={{
                  // marginBottom: 30,
                  color: "#007fc2",
                  fontSize: 22,
                  fontWeight: 900,
                }}
              >
                <Col md={3}></Col>
                <Col lg>
                  <Row>
                    <Col>
                      <div>
                        <Image
                          src={`images/iconPartTime.png`}
                          style={{ maxwidth: "100%", height: "auto" }}
                        ></Image>
                        <div>Part Time</div>
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <Image
                          src={`images/iconFullTime.png`}
                          style={{ maxwidth: "100%", height: "auto" }}
                        ></Image>
                        <div>Full Time</div>
                      </div>
                    </Col>
                  </Row>
                </Col>

                <Col lg>
                  <Row>
                    <Col>
                      <div>
                        <Image
                          src={`images/iconVisaOffered.png`}
                          style={{ maxwidth: "100%", height: "auto" }}
                        ></Image>
                        <div>Visa Offered</div>
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <Image
                          src={`images/OverseasOK.png`}
                          style={{ maxwidth: "100%", height: "auto" }}
                        ></Image>
                        <div>Overseas OK</div>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={3}></Col>
              </Row>
            </div>
          </div>
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

                        maxHeight: 200,
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
                          <div>
                            <p
                              style={{
                                whiteSpace: "pre-wrap",
                              }}
                            >
                              {job.info}
                            </p>
                          </div>
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
              <Col
                lg
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: 20,
                  backgroundColor: "#d3f1ff",
                  paddingBottom: 20,
                  paddingTop: 20,
                  textAlign: "center",
                }}
              >
                <h4>News and Information</h4>
                <Card style={{ alignSelf: "center", marginTop: 20 }}>
                  <Image
                    src={`images/news1.jpg`}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <div className="text-news">
                    (Podcast) The Coronavirus and you w/Forensic Scientist Brian
                  </div>
                </Card>
                <Card style={{ alignSelf: "center", marginTop: 20 }}>
                  <Image
                    src={`images/news2.jpg`}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <div className="text-news">
                    (Podcast) From The JET Program to HR in Hakuba, Nagano
                  </div>
                </Card>
                <Card style={{ alignSelf: "center", marginTop: 20 }}>
                  <Image
                    src={`images/news3.jpg`}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <div className="text-news">
                    Dealing With Loneliness in Thailand
                  </div>
                </Card>
                <Card style={{ alignSelf: "center", marginTop: 20 }}>
                  <Image
                    src={`images/news4.jpg`}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <div className="text-news">
                    What Salary Can You Make Teaching English in Thailand
                  </div>
                </Card>
                <Card style={{ alignSelf: "center", marginTop: 20 }}>
                  <Image
                    src={`images/news5.jpg`}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <div className="text-news">
                    (Podcast) Being a Scaffolding Erector in Thailand
                  </div>
                </Card>
                <Button style={{ alignSelf: "center", marginTop: 15 }}>
                  View all
                </Button>
              </Col>
            </Row>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Row
              style={{
                width: 1200,
                marginTop: 20,
                fontSize: 24,
                fontWeight: "bold",
                color: "#fff",
                textAlign: "center",
              }}
            >
              <Col lg>
                <div
                  className="populay-jobs"
                  style={{
                    backgroundImage: `url(images/jobRec1a.jpg) `,
                  }}
                >
                  <span className="span-pop">
                    {"งานก่อสร้าง\nงานช่าง,งานใช้แรงงาน"}
                  </span>
                </div>
              </Col>
              <Col lg>
                <div
                  className="populay-jobs"
                  style={{
                    backgroundImage: `url(images/jobRec2a.jpg) `,
                  }}
                >
                  <span className="span-pop">
                    {"งานรับใช้ตามบ้าน\nงานแม่บ้าน,คนสวน"}
                  </span>
                </div>
              </Col>
              <Col lg>
                <div
                  className="populay-jobs"
                  style={{
                    backgroundImage: `url(images/jobRec3a.jpg) `,
                  }}
                >
                  <span className="span-pop">
                    {"งานร้านอาหาร\nงานครัว,พนักงานเสิร์ฟ"}
                  </span>
                </div>
              </Col>
            </Row>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Row
              style={{
                width: 1200,
                marginBottom: 20,
                marginTop: 20,
                fontSize: 24,
                fontWeight: "bold",
                color: "#fff",
                textAlign: "center",
              }}
            >
              <Col lg>
                <div
                  className="populay-jobs"
                  style={{
                    backgroundImage: `url(images/jobRec4a.jpg) `,
                  }}
                >
                  <span className="span-pop">
                    {"งานดูแลเด็ก\nงานดูแลผู้สูงอายุ\nงานดูแลคนป่วย"}
                  </span>
                </div>
              </Col>
              <Col lg>
                <div
                  className="populay-jobs"
                  style={{
                    backgroundImage: `url(images/jobRec5a.jpg) `,
                  }}
                >
                  <span className="span-pop">
                    {"งานเกษตรกรรม\nงานในฟาร์ม,ดูแลสัตว์"}
                  </span>
                </div>
              </Col>
              <Col lg>
                <div
                  className="populay-jobs"
                  style={{
                    backgroundImage: `url(images/jobRec6a.jpg) `,
                  }}
                >
                  <span className="span-pop">
                    {"งานพนักงานโรงงาน\nงานการผลิต"}
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Styles>
    );
  }
}
