import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
 import {jobs} from '../data.js'
import styled from "styled-components";
const Styles = styled.div`
.container-boxed {

  max-width: 1200px;
  margin: 0 auto;
}
`;

 const job = jobs.find(element=>(element.jobId=='0001'))
export default class Detail extends Component {

  componentDidMount () {
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
        <Row style={{ position: 'relative', top: '154px', width: '100%', marginLeft: 0, backgroundColor: 'rgb(235,238,239)' }}>
          <div className='container-boxed' style={{ position: 'relative', width: '100%' }}>
    <h1>{job.position}</h1>
            <p>
            {job.companyName} <br/>
            </p>
          </div>
        </Row>
      </Styles>
    );
  }
}
