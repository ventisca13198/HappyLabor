import React, { Component } from "react";
import {
  Card,
  Form,
  Button,
  Row,
  Col,
  Container,
  Tabs,
  Tab,
} from "react-bootstrap";
import { postJobData } from "./postJobTempData";
import { FaFacebookSquare } from "react-icons/fa";
import { jobs } from "../../data";
import styled from "styled-components";

const Styles = styled.div`
  .card-header-tabs {
    border-bottom: 1px solid #dee2e6;
  }
`;
export default class PreviewPost extends Component {
  render() {
    return (
      <Styles>
        <div>
          {/* PreviewPost {JSON.stringify(postJobData)} */}
          <Card>
            <Card.Header
              className="text-center"
              style={{
                color: "#fff",
                backgroundColor: "#007fc3",
                fontWeight: "bold",
              }}
              as="h3"
            >
              รีวิว และ ลงประกาศงาน
            </Card.Header>
            <Card.Body style={{ fontSize: 18, fontWeight: 300 }}>
              <div style={{ fontSize: 14 }}>
                <Container>
                  <Row>
                    <Col lg={2} style={{ marginBottom: 20 }}>
                      <img
                        src={postJobData.previewData.logoFileInput}
                        style={{ width: 128, height: 128 }}
                      />
                    </Col>
                    <Col lg>
                      <img
                        src={postJobData.previewData.bannerFileInput}
                        style={{ width: "100%", height: 128 }}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      style={{
                        color: "#ff0000",
                        fontSize: 18,
                        fontWeight: "bold",
                        fontStyle: "italic",
                        textDecorationLine: "underline",
                      }}
                    >
                      เด็กเสริฟ และ ทำความสะอาดร้าน
                    </Col>
                    <Col style={{ textAlign: "right" }}>
                      วันที่โพสต์ 22/06/2020
                    </Col>
                  </Row>
                  <Card.Text
                    style={{
                      color: "#007bff",
                      fontSize: 16,
                      fontWeight: "bold",
                      fontStyle: "italic",
                      textDecorationLine: "underline",
                    }}
                  >
                    ร้านก๋วยเตี๋ยวจานยักษ์
                  </Card.Text>
                  <Card.Text>
                    ที่อยู่ที่ทำงาน - 555 ซอย วัดจันทร์ ถนน สาธุประดิษฐ์ แขวง
                    ช่องนนทรี เขต ยานนาวา จังหวัด กรุงเทพมหานคร 10120
                  </Card.Text>
                  <Card.Text>
                    สถานที่ใกล้เคียงที่สังเกตได้ - มีเซเว่นติดกับร้าน
                  </Card.Text>
                  <Card.Text>ประเภทการจ้างงาน - รายวัน</Card.Text>
                  <Card.Text>อัตราค่าจ้างต่อวัน - 350 บาท </Card.Text>
                  {/* <hr></hr> */}

                  <Tabs
                    defaultActiveKey="jobInfo"
                    transition={false}
                    className="card-header-tabs"
                  >
                    <Tab eventKey="jobInfo" title="รายละเอียดของงาน">
                      <JobInfo />
                    </Tab>
                    <Tab eventKey="companyInfo" title="ภาพโดยรวมของกิจการ">
                      <CompanyInfo />
                    </Tab>
                  </Tabs>
                </Container>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Styles>
    );
  }

  finishStep = () => {
    console.log("PreviewPost nextStep");
    var jobsTemp = jobs[0];
    console.log("PreviewPost Add job");
    jobs.push(jobsTemp);
    console.log("PreviewPost Add success");
    return true;
  };

  backStep = () => {
    console.log("PreviewPost backStep");
    return true;
  };
}

const JobInfo = () => {
  return (
    <div style={{ marginTop: 40, fontSize: 14 }}>
      <Card.Text
        style={{
          color: "#007bff",
          fontWeight: "bold",
        }}
      >
        คุณสมบัติผู้สมัคร
      </Card.Text>
      <Container>
        <Card.Text>สัญชาติ : พม่า</Card.Text>
        <Card.Text>จำนวนคนที่รับ : ชาย 5 คน</Card.Text>
        <Card.Text>ช่วงอายุที่ต้องการ : ตั้งแต่ 20 ปีขึ้นไป</Card.Text>
        <Card.Text>ประสบการทำงาน : 1 ปีขึ้นไป</Card.Text>
        <Card.Text>ต้องการผู้มีใบอนุญาตทำงาน</Card.Text>
        <Card.Text>ต้องการผู้ขับรถยนต์ได้</Card.Text>
        <Card.Text>
          ต้องการผู้สื่อภาษาไทยได้ โดย ระดับการฟังภาษาไทย - พอใช้ ;
          ระดับการพูดภาษาไทย - พอใช้ ; ระดับการอ่านภาษาไทย - พอใช้;
        </Card.Text>
        <Card.Text>ระดับการเขียนภาษาไทย - พอใช้</Card.Text>
      </Container>

      <Card.Text
        style={{
          color: "#007bff",
          fontWeight: "bold",
          marginTop: 30,
        }}
      >
        รายะละเอียดของงาน
      </Card.Text>
      <Container>
        <Card.Text>
          จำนวนวันทำงานต่อสัปดาห์ : ทำงานทุกวัน ไม่มีวันหยุด
          หยุดเฉพาะวันนักขัตฤกษ์
        </Card.Text>
        <Card.Text>
          ช่วงเวลาเข้า-ออกงาน : ทำงานตั้งแต่เวลา 8.00 น. - 17.30 น.
        </Card.Text>
        <Card.Text>
          รายละเอียดการทำงาน : นอกจากเสริฟก๋วยเตี๋ยวแล้ว ก็ล้างจาน เก็บกวาดร้าน
          ไปช่วยจ่ายตลาดช่วงเช้า 6 โมง
        </Card.Text>
      </Container>

      <Card.Text
        style={{
          color: "#007bff",
          fontWeight: "bold",
          marginTop: 30,
        }}
      >
        สวัสดิการ
      </Card.Text>
      <Container>
        <Card.Text>ค่าล่วงเวลา : มี</Card.Text>
        <Card.Text>โบนัสประจำปี : ไม่มี</Card.Text>
        <Card.Text>ประกันสังคม : ไม่มี</Card.Text>
        <Card.Text>ประกันสุขภาพ : ไม่มี</Card.Text>
        <Card.Text>
          สวัสดิการเพิ่มเติม : ฟรีห้องพัก, มีทีวี, มีพัดลม, ฟรีค่าน้ำ,
          ฟรีค่าไฟฟ้า, ฟรีอาหารกลางวัน
        </Card.Text>
      </Container>

      <Card.Text
        style={{
          color: "#007bff",
          fontWeight: "bold",
          marginTop: 30,
        }}
      >
        ติดต่อผู้ประกอบการ
      </Card.Text>
      <Container>
        <Card.Text>เบอร์ติดต่อ : 089 635 4262</Card.Text>
        <Card.Text>Line ID : 089 635 4262</Card.Text>
        <Card.Text>
          <FaFacebookSquare size={30} />
          ร้านก๋วยเตี๋ยวจานยักษ์
        </Card.Text>
      </Container>
    </div>
  );
};

const CompanyInfo = () => {
  return (
    <div style={{ marginTop: 40, fontSize: 14 }}>
      <Card.Text
        style={{
          color: "#007bff",
          fontWeight: "bold",
        }}
      >
        ภาพรวมของกิจการ
      </Card.Text>
      <Container>
        <Card.Text>
          ดำเนินการขายก๋วยเตี๋ยวมากว่า 30 ปี ในย่านสาธุประดิษฐ์
          มีลูกค้ามากมายในแต่ละวัน
        </Card.Text>
      </Container>
      <Card.Text
        style={{
          color: "#007bff",
          fontWeight: "bold",
          marginTop: 30,
        }}
      >
        ภาพบรรยากาศการทำงาน และสถานที่ทำงาน
      </Card.Text>

      <Container>
        <Row>
          <Col lg>
            <img
              src={postJobData.previewData.imagepostjob1}
              style={{ width: "100%", height: 376 }}
            />
          </Col>
          <Col lg>
            <img
              src={postJobData.previewData.imagepostjob2}
              style={{ width: "100%", height: 376 }}
            />
          </Col>
        </Row>

        <Row style={{ marginTop: 20 }}>
          <Col lg>
            <img
              src={postJobData.previewData.imagepostjob3}
              style={{ width: "100%", height: 376 }}
            />
          </Col>
          <Col lg>
            <img
              src={postJobData.previewData.imagepostjob4}
              style={{ width: "100%", height: 376 }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
