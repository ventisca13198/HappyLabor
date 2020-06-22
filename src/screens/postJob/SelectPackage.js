import React, { Component } from "react";
import { Card, Form, Button } from "react-bootstrap";

export default class SelectPackage extends Component {
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
}
