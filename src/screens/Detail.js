import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { jobs } from '../data.js'
import styled from "styled-components";

import { FaBookmark, FaRegCalendarAlt } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';
import { MdLocationOn } from 'react-icons/md'
import { GiWhiteBook } from 'react-icons/gi'
const Styles = styled.div`
.container-boxed {

  max-width: 1200px;
  margin: 0 auto;
}
.row {
  width=100%;
}
.width33.Col {
  width: 33%;
}
`;

const job = jobs.find(element => (element.jobId == '0001'))
export default class Detail extends Component {

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "../data.js";
    script.async = true;
    document.body.appendChild(script);
  }


  render() {
    console.log(jobs)
    console.log(job)
    return (
      <Styles>
        <div style={{ position: "relative", height: "154px", width: "100%" }} />
        <Row style={{ backgroundColor: 'rgb(235,238,239)' }}>
          <div className='container-boxed' style={{ width: '100%', color: '#444444' }}>
            <h1>{job.position}</h1>
            <p>
              {job.companyName} <br />
              <div style={{ color: '#1380C0' }}>
                <FaBookmark />{job.jobType}<br />
              </div>
              <GrMapLocation />{job.address}<br />
              <MdLocationOn />{job.provinceTh}<br />
              <FaRegCalendarAlt />{job.durationPost}<br />
              <GiWhiteBook />{job.jobCategory}<br />
            </p>
          </div>
        </Row>
        <Row className='row container-boxed' >
          <Col md={8}>
            <h3>Job Overview</h3>
            <Row className='row'>
           
                <Col md={4}>Employer Type</Col>
                <Col md={4}>Employer Type</Col>
                <Col md={4}>Employer Type</Col>
                <Col md={4}>Employer Type</Col>
            </Row>
          </Col>
          <Col md={4}>
            <h4>{job.companyName}</h4>
          </Col>
        </Row>
      </Styles>
    );
  }
}
