import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { jobs } from '../data.js'
import styled from "styled-components";

import { FaBookmark, FaRegCalendarAlt } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';
import { MdLocationOn } from 'react-icons/md'
import { GiWhiteBook } from 'react-icons/gi'
import {BsFillPersonFill} from 'react-icons/bs'
const Styles = styled.div`
.container-boxed {

  max-width: 1200px;
  margin: auto;
}
.row {
  width=100%;

}
.job-overview {
  padding: 5px;
}

.job-overview-value {
  color: #404040;
  font-weight: bold;
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
        <Row style={{ backgroundColor: 'rgb(235,238,239)', margin:'0px'}}>
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
            <Row round className='row' style={{backgroundColor:'#DBF6F7', borderRadius:10,padding: '20px', fontSize:'0.95em', color: '#232323'}} >
           
                <Col className = 'job-overview' md={4} >
                  <BsFillPersonFill size={28} color={'#00b0ff'}/>
                  <span className='job-overview-value'>Employer Type</span> <br />
                  {job.jobOverview.employerType}
                </Col>
                <Col className = 'job-overview' md={4}>
                  <BsFillPersonFill size={28} color={'#00b0ff'}/>
                  <span className='job-overview-value'>Industry</span> <br />
                  {job.jobOverview.industry}
                </Col>
                <Col className = 'job-overview' md={4}>
                  <BsFillPersonFill size={28} color={'#00b0ff'}/>
                  <span className='job-overview-value'>Salary</span> <br />
                  {job.jobOverview.salary}
                </Col>
                <Col className = 'job-overview' md={4}>
                  <BsFillPersonFill size={28} color={'#00b0ff'}/>
                  <span className='job-overview-value'>Thai Level</span> <br />
                  {job.jobOverview.thaiLevel}
                </Col>
                <Col className = 'job-overview' md={4}>
                  <BsFillPersonFill size={28} color={'#00b0ff'}/>
                  <span className='job-overview-value'>Restricted to Domestic Applicants?</span> <br />
                  {job.jobOverview.restrictedApplicants}
                </Col>
                <Col className = 'job-overview' md={4}>
                  <BsFillPersonFill size={28} color={'#00b0ff'}/>
                  <span className='job-overview-value'>Visa Sponsorship</span> <br />
                  {job.jobOverview.visa}
                </Col>
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
