import React, { Component } from "react";
import { Card, Form, Button, Row, Col, Container } from "react-bootstrap";

export default class ManageLogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoFileInput: null,
      bannerFileInput: null,
      imagepostjob1: null,
      imagepostjob2: null,
      imagepostjob3: null,
      imagepostjob4: null,
    };
    this.selectLogoFileInput = this.selectLogoFileInput.bind(this);
    this.selectBannerFileInput = this.selectBannerFileInput.bind(this);
  }

  selectLogoFileInput(event) {
    if (event.target.files[0]) {
      this.setState({
        logoFileInput: URL.createObjectURL(event.target.files[0]),
      });
    }
  }
  selectBannerFileInput(event) {
    if (event.target.files[0]) {
      this.setState({
        bannerFileInput: URL.createObjectURL(event.target.files[0]),
      });
    }
  }

  selectImagepostjob(event, index) {
    console.log(event.target.files[0]);
    console.log(index);

    if (event.target.files[0]) {
      switch (index) {
        case "1":
          this.setState({
            imagepostjob1: URL.createObjectURL(event.target.files[0]),
          });
          break;
        case "2":
          this.setState({
            imagepostjob2: URL.createObjectURL(event.target.files[0]),
          });
          break;
        case "3":
          this.setState({
            imagepostjob3: URL.createObjectURL(event.target.files[0]),
          });
          break;
        case "4":
          this.setState({
            imagepostjob4: URL.createObjectURL(event.target.files[0]),
          });
          break;
        default:
      }
    }
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Header
            className="text-center"
            style={{
              color: "#fff",
              backgroundColor: "#007bff",
              fontWeight: "bold",
            }}
            as="h3"
          >
            จัดการ โลโก้ และ แบนเนอร์
          </Card.Header>
          <Card.Body style={{ fontSize: 18, fontWeight: 300 }}>
            <Container>
              <Row style={{ marginBottom: 20, textAlign: "center" }}>
                <Col lg={2} style={{ marginBottom: 20 }}>
                  <label
                    htmlFor="logoFileInput"
                    style={{ width: "100%", height: 128, position: "relative" }}
                  >
                    <input
                      type="file"
                      id="logoFileInput"
                      onChange={this.selectLogoFileInput}
                      style={{ display: "none" }}
                    />
                    <img
                      src={this.state.logoFileInput}
                      style={{ width: 128, height: 128 }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        display: this.state.logoFileInput ? "none" : "",
                      }}
                    >
                      โลโก้
                    </div>
                  </label>
                </Col>
                <Col lg>
                  <label
                    htmlFor="BannerFileInput"
                    style={{ width: "100%", height: 128, position: "relative" }}
                  >
                    <input
                      type="file"
                      id="BannerFileInput"
                      onChange={this.selectBannerFileInput}
                      style={{ display: "none" }}
                    />
                    <img
                      src={this.state.bannerFileInput}
                      style={{ width: "100%", height: 128 }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        display: this.state.bannerFileInput ? "none" : "",
                      }}
                    >
                      แบนเนอร์
                    </div>
                  </label>
                </Col>
              </Row>
            </Container>
            <div style={{ marginBottom: 30 }}>
              <Card.Text>โลโก้ ของผู้ประกอบการ แนะนำดังนี้</Card.Text>
              <Card.Text>1) ขนาดไฟล์แนะนำ 512 x 512px</Card.Text>
              <Card.Text>2) รูปแบบไฟล์ JPG หรือ PNG</Card.Text>
              <Card.Text style={{ marginTop: 30 }}>
                แบนเนอร์ หรือ รูปหน้าร้าน ของผู้ประกอบการ แนะนำดังนี้
              </Card.Text>
              <Card.Text>1) (กว้าง) 1000px x (สูง) 338px</Card.Text>
              <Card.Text>2) รูปแบบไฟล์ JPG หรือ PNG</Card.Text>
              <Card.Text style={{ marginTop: 30 }}>
                หมายเหตุ : กรณีแก้ไขสามารถเปลี่ยนโลโก้ หรือแบนเนอร์ใหม่ได้
                ก่อนการโพสต์งาน
              </Card.Text>
            </div>

            <hr></hr>
            <Card.Text>
              {" "}
              ท่านสามารถใส่ ภาพบรรยากาศการทำงาน และสถานที่ทำงาน
              เพื่อใช้ในการประกอบการลงประกาศได้
            </Card.Text>

            <Container>
              <Row>
                <Col lg>
                  <label
                    htmlFor="imagepostjob1"
                    style={{ width: "100%", height: 376, position: "relative" }}
                  >
                    <input
                      type="file"
                      id="imagepostjob1"
                      onChange={(event) => this.selectImagepostjob(event, "1")}
                      style={{ display: "none" }}
                    />
                    <img
                      src={this.state.imagepostjob1}
                      style={{ width: "100%", height: 376 }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        display: this.state.imagepostjob1 ? "none" : "",
                      }}
                    >
                      ภาพประกอบ
                    </div>
                  </label>
                </Col>
                <Col lg>
                  <label
                    htmlFor="imagepostjob2"
                    style={{ width: "100%", height: 376, position: "relative" }}
                  >
                    <input
                      type="file"
                      id="imagepostjob2"
                      onChange={(event) => this.selectImagepostjob(event, "2")}
                      style={{ display: "none" }}
                    />
                    <img
                      src={this.state.imagepostjob2}
                      style={{ width: "100%", height: 376 }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        display: this.state.imagepostjob2 ? "none" : "",
                      }}
                    >
                      ภาพประกอบ
                    </div>
                  </label>
                </Col>
              </Row>

              <Row>
                <Col lg>
                  <label
                    htmlFor="imagepostjob3"
                    style={{ width: "100%", height: 376, position: "relative" }}
                  >
                    <input
                      type="file"
                      id="imagepostjob3"
                      onChange={(event) => this.selectImagepostjob(event, "3")}
                      style={{ display: "none" }}
                    />
                    <img
                      src={this.state.imagepostjob3}
                      style={{ width: "100%", height: 376 }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        display: this.state.imagepostjob3 ? "none" : "",
                      }}
                    >
                      ภาพประกอบ
                    </div>
                  </label>
                </Col>
                <Col lg>
                  <label
                    htmlFor="imagepostjob4"
                    style={{ width: "100%", height: 376, position: "relative" }}
                  >
                    <input
                      type="file"
                      id="imagepostjob4"
                      onChange={(event) => this.selectImagepostjob(event, "4")}
                      style={{ display: "none" }}
                    />
                    <img
                      src={this.state.imagepostjob4}
                      style={{ width: "100%", height: 376 }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        display: this.state.imagepostjob4 ? "none" : "",
                      }}
                    >
                      ภาพประกอบ
                    </div>
                  </label>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
