import React, { Component } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { ThemeConsumer } from "styled-components";
import { postJobData } from "./postJobTempData";

export default class SelectPackage extends Component {
  state = {
    test: "1",
  };
  render() {
    return (
      <div>
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
            เลือกแพคเก็จ
          </Card.Header>
          <Card.Body style={{ fontSize: 18, fontWeight: 300 }}>
            <div style={{ marginBottom: 20 }}>
              <Form.Check
                //   disabled
                type={"radio"}
                label={`ฟรี แพคเก็จ - โพสต์ได้ไม่เกิน 10 ครั้ง และต้องโพสต์ภายใน 30 วัน`}
                //   id={`disabled-default-radio`}
              />
              <span style={{ color: "red", fontSize: 10, paddingLeft: 100 }}>
                *** การใช้งานแพคเกจของคุณเหลือเพียง 5 ครั้ง ในการลงประกาศ
                และสามารถใช้งานได้ภายในวันที่ 15/07/2020 .
              </span>
            </div>
            <div style={{ marginBottom: 20 }}>
              <Form.Check
                type={"radio"}
                label={`เบสิค แพ็คเกจ - จำกัดการโพสต์ไม่เกิน 30 ครั้ง  และต้องใช้ภายใน 90 วัน`}
              />
            </div>
            <div style={{ marginBottom: 20 }}>
              <Form.Check
                type={"radio"}
                label={`พรีเมี่ยม แพ็ตเกจ - โพสต์ได้ไม่จำกัด  แต่ต้องใช้ภายใน 1 ปี`}
              />
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }

  nextStep = () => {
    console.log("SelectPackage nextStep");
    postJobData.previewData = {
      logoFileInput: null,
      bannerFileInput: null,
      imagepostjob1: null,
      imagepostjob2: null,
      imagepostjob3: null,
      imagepostjob4: null,
    };
    return true;
  };

  backStep = () => {
    console.log("SelectPackage backStep");
    return false;
  };
  // nextStep = (btnEvent) => {
  //   console.log("SelectPackage " + btnEvent);
  //   return true;
  // };
}
