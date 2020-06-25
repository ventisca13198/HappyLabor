import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Container,
  Image,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { jobs } from "../../data.js";
import styled from "styled-components";
import ReactDOM from "react-dom";
import ImageGallery from "react-image-gallery";
import {
  FaBookmark,
  FaRegCalendarAlt,
  FaRegBuilding,
  FaAddressCard,
  FaMoneyBillAlt,
  FaEdit,
  FaSave,
} from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { MdLocationOn, MdDone } from "react-icons/md";
import { GiWhiteBook } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdChatboxes } from "react-icons/io";
// import Gallery from "react-grid-gallery";
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

class FormEdit extends Component {
  state = {
    editable: "",
  };
  constructor(props) {
    super(props);
    this.toggleEditing = this.toggleEditing.bind(this);
    this.saveInput = this.saveInput.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      editable: props.editable,
    };
  }

  handleInput() {
    console.log(this.refs.userInput);
    var input = ReactDOM.findDOMNode(this.refs.userInput);
    console.log(input.value);
    this.saveInput(input.value);
    this.toggleEditing();
  }

  toggleEditing() {
    var userIsEditing = !this.state.userIsEditing;
    this.setState({
      userIsEditing: userIsEditing,
    });
  }
  saveInput(input) {
    this.setState({
      editable: input,
    });
  }
  render() {
    var userIsEditing = this.state.userIsEditing;
    var label = this.props.label;
    if (userIsEditing) {
      return (
        // <div>
        //   <Col lg>
        //     <div class="form-group">
        //       <input
        //         type="text"
        //         class="form-control"
        //         id="input-{ label }"
        //         ref="userInput"
        //       />
        //     </div>
        //   </Col>
        //   <Col lg>
        //     <FaSave onClick={this.handleInput} />
        //   </Col>
        // </div>
        <InputGroup className="mb-3">
          <FormControl
            type="text"
            id="input-{ label }"
            ref="userInput"
            placeholder={this.props.editable}
            aria-label={this.props.editable}
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={this.handleInput}>
              ตกลง
            </Button>
          </InputGroup.Append>
        </InputGroup>
      );
    }
    return (
      <>
        <span> {this.state.editable}</span>
        <FaEdit
          onClick={this.toggleEditing}
          style={{ marginLeft: 5, color: "red" }}
        />
      </>
    );
  }
}

export default class EditPost extends Component {
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
            <h1>
              <FormEdit editable="แก้ไขตำแหน่งงาน" />
            </h1>
            <p>
              <FormEdit editable="แก้ไขชื่อสถานประกอบการ" /> <br />
              <div style={{ color: "#1380C0" }}>
                <FaBookmark style={{ marginRight: 5 }} />
                <FormEdit editable="แก้ไขลักษณะสัญญาจ้างงาน" />
                <br />
              </div>
              <GrMapLocation style={{ marginRight: 5 }} />
              <FormEdit editable="แก้ไขที่อยู่กิจการ" />
              <br />
              <MdLocationOn style={{ marginRight: 5 }} />
              <FormEdit editable="แก้ไขจังหวัดที่ตั้งกิจการ" />
              <br />
              <FaRegCalendarAlt style={{ marginRight: 5 }} />
              <FormEdit editable="แก้ไขระยะเวลาการโพสต์" />
              <br />
              <GiWhiteBook style={{ marginRight: 5 }} />
              <FormEdit editable="แก้ไขประเภทงาน" />
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
                <FormEdit editable="แก้ไข" />
              </Col>
              <Col className="job-overview" md={4}>
                <FaRegBuilding size={20} color={"#00b0ff"} />
                <span className="job-overview-value">ประเภทธุรกิจ</span> <br />
                <FormEdit editable="แก้ไข" />
              </Col>
              <Col className="job-overview" md={4}>
                <FaMoneyBillAlt size={20} color={"#00b0ff"} />
                <span className="job-overview-value">อัตราค่าจ้าง</span> <br />
                <FormEdit editable="แก้ไข" />
              </Col>
              <Col className="job-overview" md={4}>
                <IoMdChatboxes size={20} color={"#00b0ff"} />
                <span className="job-overview-value">สือสารภาษาไทย</span> <br />
                <FormEdit editable="แก้ไข" />
              </Col>
              <Col className="job-overview" md={4}>
                <TiWorld size={20} color={"#00b0ff"} />
                <span className="job-overview-value">สัญชาติที่รับสมัคร</span>
                <br />
                <FormEdit editable="แก้ไข" />
              </Col>
              <Col className="job-overview" md={4}>
                <FaAddressCard size={20} color={"#00b0ff"} />
                <span className="job-overview-value">ใบอนุญาต</span> <br />
                <FormEdit editable="แก้ไข" />
              </Col>
            </Row>
            <Row
              style={{ whiteSpace: "pre-wrap", marginRight: 20, marginTop: 30 }}
            >
              <FormEdit editable="แก้ไขข้อมูลแบบย่อ" />
            </Row>
            <Row style={{ whiteSpace: "pre-wrap", marginRight: 20 }}>
              <div>
                <h3 style={{ color: "#0085d0", marginTop: 30 }}>
                  <FormEdit editable="แก้ไขหัวข้อ" />
                </h3>
                <FormEdit editable="คำอธิบายงาน" />
              </div>
            </Row>
            <Row
              style={{ whiteSpace: "pre-wrap", marginRight: 20, marginTop: 30 }}
            ></Row>

            {/* <Lightbox showImageModifiers={false} thumbnailWidth='150px' thumbnailHeight='150px' images={job.gallery.map(element=>({src:element,title:'',description:''}))}/> */}
            {/* <Carousel views={job.gallery.map(element=>({source:element}))} /> */}
            {/* <ImageGallery items={job.gallery.map(element=>({original:element,thumbnail:element}))} /> */}
          </Col>
          <Col style={{ whiteSpace: "pre-wrap", margin: 20 }}>
            {/* company info */}
            <h4>
              <FormEdit editable="แก้ไขชื่อชื่อบริษัท" /> <br />
            </h4>
            <br />
            <FormEdit editable="แก้ไขภาพรวมบริษัท" />

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
