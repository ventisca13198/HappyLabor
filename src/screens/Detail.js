import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { jobs } from "../data.js";
import styled from "styled-components";

import { FaBookmark, FaRegCalendarAlt } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";
import { GiWhiteBook } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import Gallery from "react-grid-gallery";
// import ImageGallery from 'react-image-gallery';

// import "~react-image-gallery/styles/scss/image-gallery.scss";

//  import "./image-gallery.scss";

const Styles = styled.div`
.container-boxed {

  max-width: 1200px;
  margin: auto;
}
.row {
  width=95%;

}
.job-overview {
  padding: 5px;
}

.job-overview-value {
  color: #404040;
  font-weight: bold;
}


`;

const IMAGES = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    caption: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
];
export default class Detail extends Component {
  state = {
    job: this.props.location,
  };
  render() {
    console.log(this.props.match.params.id);
    const job = jobs.find(
      (element) => element.jobId === this.props.match.params.id
    );
    console.log(job.gallery.map((element) => ({ src: element })));
    return (
      <Styles>
        <div style={{ backgroundColor: "gray", height: "150px" }} />
        <div style={{ position: "relative", height: "154px", width: "100%" }} />
        <Row style={{ backgroundColor: "rgb(235,238,239)", margin: "0px" }}>
          <div
            className="container-boxed"
            style={{ width: "100%", color: "#444444" }}
          >
            <h1>{job.position}</h1>
            <p>
              {job.companyName} <br />
              <div style={{ color: "#1380C0" }}>
                <FaBookmark />
                {job.jobType}
                <br />
              </div>
              <GrMapLocation />
              {job.address}
              <br />
              <MdLocationOn />
              {job.provinceTh}
              <br />
              <FaRegCalendarAlt />
              {job.durationPost}
              <br />
              <GiWhiteBook />
              {job.jobCategory}
              <br />
            </p>
          </div>
        </Row>
        <Row className="row container-boxed">
          <Col md={8}>
            <h3>Job Overview</h3>

            <Row
              round
              className="row"
              style={{
                backgroundColor: "#DBF6F7",
                borderRadius: 10,
                padding: "20px",
                fontSize: "0.95em",
                color: "#232323",
              }}
            >
              <Col className="job-overview" md={4}>
                <BsFillPersonFill size={28} color={"#00b0ff"} />
                <span className="job-overview-value">Employer Type</span> <br />
                {job.jobOverview.employerType}
              </Col>
              <Col className="job-overview" md={4}>
                <BsFillPersonFill size={28} color={"#00b0ff"} />
                <span className="job-overview-value">Industry</span> <br />
                {job.jobOverview.industry}
              </Col>
              <Col className="job-overview" md={4}>
                <BsFillPersonFill size={28} color={"#00b0ff"} />
                <span className="job-overview-value">Salary</span> <br />
                {job.jobOverview.salary}
              </Col>
              <Col className="job-overview" md={4}>
                <BsFillPersonFill size={28} color={"#00b0ff"} />
                <span className="job-overview-value">Thai Level</span> <br />
                {job.jobOverview.thaiLevel}
              </Col>
              <Col className="job-overview" md={4}>
                <BsFillPersonFill size={28} color={"#00b0ff"} />
                <span className="job-overview-value">
                  Restricted to Domestic Applicants?
                </span>{" "}
                <br />
                {job.jobOverview.restrictedApplicants}
              </Col>
              <Col className="job-overview" md={4}>
                <BsFillPersonFill size={28} color={"#00b0ff"} />
                <span className="job-overview-value">
                  Visa Sponsorship
                </span>{" "}
                <br />
                {job.jobOverview.visa}
              </Col>
            </Row>
            <Row>{job.info}</Row>
            <Row>
              {job.discription.map((element, index) => {
                return (
                  <div>
                    <h3 style={{ color: "#0085d0" }}>{element.title}</h3>
                    {element.detail}
                  </div>
                );
              })}
            </Row>
            <Row>
              <Col>
                <Gallery images={job.gallery} />
              </Col>
            </Row>

            {/* <Lightbox showImageModifiers={false} thumbnailWidth='150px' thumbnailHeight='150px' images={job.gallery.map(element=>({src:element,title:'',description:''}))}/> */}
            {/* <Carousel views={job.gallery.map(element=>({source:element}))} /> */}
            {/* <ImageGallery items={job.gallery.map(element=>({original:element,thumbnail:element}))} /> */}

            <Row>
              <strong>Login to apply for this job. </strong>
            </Row>
            <Row>
              <Button variant="primary" size="lg" style={{backgroundColor:'#007fc3'}}>
                Login
              </Button>
            </Row>
          </Col>
          <Col md={4}>
            {/* company info */}
            <h4>{job.companyName}</h4>
            <br />
            <strong>Company Profile</strong> <br />
            {job.profile}
            <br />
            <strong>
              <a>Post a Review </a>
            </strong>
            If you have worked or interviewed at the company, we and other job
            seekers would to hear about your experience
          </Col>
        </Row>
      </Styles>
    );
  }
}
