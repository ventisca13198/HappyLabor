import React, { Component } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { jobs } from "../data.js";
import styled from "styled-components";

import {
  FaBookmark,
  FaRegCalendarAlt,
  FaRegBuilding,
  FaAddressCard,
  FaMoneyBillAlt,
} from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";
import { GiWhiteBook } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdChatboxes } from "react-icons/io";
import Gallery from "react-grid-gallery";
import { TiWorld } from "react-icons/ti";

// import ImageGallery from 'react-image-gallery';
//
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
  margin-left : 5px;
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
        <div style={{ position: "relative", height: "154px", width: "100%" }} />

        <Row style={{ backgroundColor: "rgb(235,238,239)", margin: "0px" }}>
          <div
            className="container-boxed"
            style={{
              width: "100%",
              color: "#444444",
              paddingTop: 20,
              paddingBottom: 20,
              paddingLeft: 30,
              paddingRight: 30,
            }}
          >
            <h1>{job.position}</h1>
            <p>
              {job.companyName} <br />
              <div style={{ color: "#1380C0" }}>
                <FaBookmark style={{marginRight:5}}/>
                {job.jobType}
                <br />
              </div>
              <GrMapLocation style={{marginRight:5}}/>
              {job.address}
              <br />
              <MdLocationOn style={{marginRight:5}}/>
              {job.provinceTh}
              <br />
              <FaRegCalendarAlt style={{marginRight:5}}/>
              {job.durationPost}
              <br />
              <GiWhiteBook style={{marginRight:5}}/>
              {job.jobCategory}
              <br />
            </p>
          </div>
        </Row>
        {/* <Container> */}
        <Row className="row container-boxed">
          <Col md={8} style={{ margin: 20 }}>
            <h3>ภาพรวมของงาน</h3>

            <Row
              round
              className="row"
              style={{
                backgroundColor: "#DBF6F7",
                borderRadius: 10,
                padding: 20,
                fontSize: "0.95em",
                color: "#232323",
                width: "100%",
              }}
            >
              <Col className="job-overview" md={4}>
                <BsFillPersonFill size={20} color={"#00b0ff"} />
                <span className="job-overview-value">ประเภทการจ้าง</span> <br />
                {job.jobOverview.employerType}
              </Col>
              <Col className="job-overview" md={4}>
                <FaRegBuilding size={20} color={"#00b0ff"} />
                <span className="job-overview-value">ประเภทธุรกิจ</span> <br />
                {job.jobOverview.industry}
              </Col>
              <Col className="job-overview" md={4}>
                <FaMoneyBillAlt size={20} color={"#00b0ff"} />
                <span className="job-overview-value">อัตราค่าจ้าง</span> <br />
                {job.jobOverview.salary}
              </Col>
              <Col className="job-overview" md={4}>
                <IoMdChatboxes size={20} color={"#00b0ff"} />
                <span className="job-overview-value">สือสารภาษาไทย</span> <br />
                {job.jobOverview.thaiLevel}
              </Col>
              <Col className="job-overview" md={4}>
                <TiWorld size={20} color={"#00b0ff"} />
                <span className="job-overview-value">สัญชาติที่รับสมัคร</span>
                <br />
                {job.jobOverview.restrictedApplicants}
              </Col>
              <Col className="job-overview" md={4}>
                <FaAddressCard size={20} color={"#00b0ff"} />
                <span className="job-overview-value">ใบอนุญาต</span> <br />
                {job.jobOverview.visa}
              </Col>
            </Row>
            <Row
              style={{ whiteSpace: "pre-wrap", marginRight: 20, marginTop: 30 }}
            >
              {job.info}
            </Row>
            <Row style={{ whiteSpace: "pre-wrap", marginRight: 20 }}>
              {job.discription.map((element, index) => {
                return (
                  <div>
                    <h3 style={{ color: "#0085d0", marginTop: 30 }}>
                      {element.title}
                    </h3>
                    {element.detail}
                  </div>
                );
              })}
            </Row>
            <Row
              style={{ whiteSpace: "pre-wrap", marginRight: 20, marginTop: 30 }}
            >
              <Col>
                <Gallery images={job.gallery} />
              </Col>
            </Row>

            {/* <Lightbox showImageModifiers={false} thumbnailWidth='150px' thumbnailHeight='150px' images={job.gallery.map(element=>({src:element,title:'',description:''}))}/> */}
            {/* <Carousel views={job.gallery.map(element=>({source:element}))} /> */}
            {/* <ImageGallery items={job.gallery.map(element=>({original:element,thumbnail:element}))} /> */}

            <Row style={{ marginTop: 30 }}>
              <strong>เข้าสู่ระบบ เพื่อสมัครงาน </strong>
            </Row>
            <Row style={{ marginTop: 15 }}>
              <Button
                variant="primary"
                size="lg"
                style={{ backgroundColor: "#007fc3" }}
              >
                เข้าสู่ระบบ
              </Button>
            </Row>
          </Col>
          <Col style={{ whiteSpace: "pre-wrap", margin: 20 }}>
            {/* company info */}
            <h4>{job.companyName}</h4>
            <br />
            <strong>ภาพรวมสถานประกอบการ</strong> <br />
            {job.profile}
            {/* <br />
              <strong style={{marginTop:20}}>
                <a>Post a Review </a>
              </strong>
              If you have worked or interviewed at the company, we and other job
              seekers would to hear about your experience */}
          </Col>
        </Row>
        {/* </Container> */}
      </Styles>
    );
  }
}
