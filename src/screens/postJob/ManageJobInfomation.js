import React, { Component } from "react";
import { Card, Switch, FormControlLabel, InputLabel, Select, Divider, Grid, FormLabel, FormControl, FormGroup, Checkbox, RadioGroup, Radio } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import { Row, Col } from "react-bootstrap";

import { MdAddBox } from 'react-icons/md';
import { FaMinusCircle } from 'react-icons/fa';


export default class ManageJobInfomation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      additionalQuestion: [{ question: "" }],
      useProfileAddress: true,
      checked:{}
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  addQuestion = () => {
    this.setState(prevState => ({
      additionalQuestion: [...prevState.additionalQuestion, { question: "" }]
    }))
  }


  popQuestion = () => {
    this.setState(prevState => ({

      additionalQuestion: prevState.additionalQuestion.slice(0, prevState.additionalQuestion.length - 1)
    }))
  }

  render() {

    return <div style={{margin:'10px',padding:'10px'}}>

      <h3>ข้อมูลผู้ประกอบการ และการลงประกาศ</h3>
      <form noValidate autoComplete="off">

        <TextField id="standard-basic" label="ชื่อผู้ประกอบการ" defaultValue={'ร้านกวยเตี๋ยวจานยักษ์'} variant="outlined" fullWidth margin="normal" />
        <TextField
          id="outlined-multiline-static"
          label="ที่อยู่ผู้ประกอบการ"
          multiline
          rows={2}
          defaultValue="555 ร้านก๋วยเตี๋ยวจานยักษ์   ซอย วัดจันทร์  ถนน สาธุประดิษฐ์   แขวง ช่องนนทรี เขต ยานนาวา  จังหวัด กรุงเทพมหานคร   10120"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <FormControlLabel
          control={
            <Switch
            checked={this.state.useProfileAddress}
            onChange={this.handleChange}
              name="useProfileAddress"
              color="primary"
            />
          }
          label="ที่ทำงานตามที่อยู่ผู้ประกอบการ"
          labelPlacement="start"
        />

        <Row>
          <Col>
            <TextField label="ที่อยู่ที่ทำงาน" defaultValue={'555'} variant="outlined" margin="normal" fullWidth disabled={this.state.useProfileAddress}/>
          </Col>
          <Col>
            <TextField label="ซอย" defaultValue={'วัดจันทร์'} variant="outlined" margin="normal" fullWidth disabled={this.state.useProfileAddress}/>
          </Col>
        </Row>

        <Row>
          <Col>
            <TextField label="ถนน" defaultValue={'สาธุประดิษฐ์'} variant="outlined" margin="normal" fullWidth disabled={this.state.useProfileAddress}/>
          </Col>
          <Col>
            <FormControl variant="outlined" fullWidth margin="normal" disabled={this.state.useProfileAddress}>
              <InputLabel htmlFor="outlined-age-native-simple">จังหวัด</InputLabel>
              <Select
                native
                value={1}
                label="จังหวัด"

              >
                <option aria-label="None" value="" />
                <option value={1}>กรุงเทพมหานคร</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormControl variant="outlined" fullWidth margin="normal" disabled={this.state.useProfileAddress}>
              <InputLabel htmlFor="outlined-age-native-simple">ตำบล/แขวง</InputLabel>
              <Select
                native
                value={1}
                label="ตำบล/แขวง"

              >
                <option aria-label="None" value="" />
                <option value={1}>ช่องนนทรี</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </Col>
          <Col>
            <FormControl variant="outlined" fullWidth margin="normal" disabled={this.state.useProfileAddress}>
              <InputLabel htmlFor="outlined-age-native-simple">อำเภอ/เขต</InputLabel>
              <Select
                native
                value={1}
                label="อำเภอ/เขต"

              >
                <option aria-label="None" value="" />
                <option value={1}>ยานนาวา</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </Col>
        </Row>


        <Row>
          <Col>
            <TextField label="สถานที่ใกล้เคียงที่สังเกตได้" defaultValue={'ร้านกวยเตี๋ยวจานยักษ์'} variant="outlined" fullWidth margin="normal" disabled={this.state.useProfileAddress}/>
          </Col>
          <Col>
            <TextField label="เบอร์ติดต่อ" defaultValue={'081 315 6485'} variant="outlined" fullWidth margin="normal" disabled={this.state.useProfileAddress}/>
          </Col>
        </Row>

        <Row>
          <Col>
            <TextField label="Line ID" defaultValue={'big noodle'} variant="outlined" fullWidth margin="normal" disabled={this.state.useProfileAddress}/>
          </Col>
          <Col>
            <TextField label="Facebook ID" defaultValue={'ร้านกวยเตี๋ยวจานยักษ์'} variant="outlined" fullWidth margin="normal" disabled={this.state.useProfileAddress}/>
          </Col>
        </Row>










        <Divider style={{margin:'20px'}}/>
        <h3 >ข้อมูลรายละเอียดตำแหน่งที่ลงประกาศ </h3>
        <Row>
          <Col>
            <TextField
              id="date"
              label="วันที่เริ่มประกาศ"
              type="date"
              margin="normal"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Col>
          <Col>
            <TextField
              id="date"
              label="วันที่หมดอายุ"
              type="date"
              margin="normal"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Col>
        </Row>

        <Row>
          <Col sm={4}>
            <FormControl variant="outlined" fullWidth margin="normal">
              <InputLabel htmlFor="outlined-age-native-simple">ประเภทธุรกิจ</InputLabel>
              <Select
                native
                value={1}
                label="ประเภทธุรกิจ"

              >
                <option aria-label="None" value="" />
                <option value={1}>ก่อสร้าง</option>
                <option value={2}>ร้านอาหาร</option>
                <option value={3}>อู่รถยนต์</option>
              </Select>
            </FormControl>
          </Col>
          <Col sm={8}>
            <TextField label="กรณีเลือกอื่นๆ โปรดระบุ" defaultValue={''} variant="outlined" margin="normal" fullWidth />
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <FormControl variant="outlined" fullWidth margin="normal">
              <InputLabel htmlFor="outlined-age-native-simple">ตำแหน่งงาน</InputLabel>
              <Select
                native
                value={1}
                label="ตำแหน่งงาน"

              >
                <option aria-label="None" value="" />
                <option value={1}>เด็กเสริฟ</option>
                <option value={2}>ช่างปูน</option>
                <option value={3}>ช่างสี</option>
              </Select>
            </FormControl>
          </Col>
          <Col sm={8}>
            <TextField label="กรณีเลือกอื่นๆ โปรดระบุ" defaultValue={''} variant="outlined" margin="normal" fullWidth />
          </Col>
        </Row>
        <Row>
          <FormControl component="fieldset" >
            <FormLabel component="legend">สัญชาติที่รับ </FormLabel>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox checked={true} />}
                label="ลาว"
              />
              <FormControlLabel
                control={<Checkbox checked={true} />}
                label="พม่า"
              />
              <FormControlLabel
                control={<Checkbox checked={true} />}
                label="เขมร"
              />
              <FormControlLabel
                control={<Checkbox checked={false} />}
                label="อื่นๆ"
              />
              <TextField label="โปรดระบุ" defaultValue={''} variant="outlined" margin="normal" size="small" />
            </FormGroup>

          </FormControl>
        </Row>
        <Row>
          <FormControl component="fieldset" >
            <FormLabel component="legend">จำนวนคนที่รับ </FormLabel>
            <FormGroup>
              <FormGroup row>
                <FormControlLabel
                  control={<Checkbox checked={false} />}
                  label="ชาย"
                />
                <TextField label="จำนวนคน" defaultValue={''} variant="outlined" margin="normal" size="small" />
              </FormGroup>
              <FormGroup row>
                <FormControlLabel
                  control={<Checkbox checked={true} />}
                  label="หญิง"
                />
                <TextField label="จำนวนคน" defaultValue={'1'} variant="outlined" margin="normal" size="small" />
              </FormGroup>
              <FormControlLabel
                control={<Checkbox checked={false} />}
                label="คู่สามี-ภรรยา"
              />
              <FormGroup row>
                <FormControlLabel
                  control={<Checkbox checked={false} />}
                  label="ไม่ระบุเพศ"
                />
                <TextField label="จำนวนคน" defaultValue={''} variant="outlined" margin="normal" size="small" />
              </FormGroup>
              <FormGroup row>
                <FormControlLabel
                  control={<Checkbox checked={false} />}
                  label="อื่นๆ"
                />
                <TextField label="โปรดระบุ" defaultValue={''} variant="outlined" margin="normal" size="small" />
                <TextField label="จำนวนคน" defaultValue={''} variant="outlined" margin="normal" size="small" />
              </FormGroup>
            </FormGroup>

          </FormControl>
        </Row>
        <Row>
          <FormControl component="fieldset">
            <FormLabel component="legend">ช่วงอายุที่ต้องการ</FormLabel>
            <RadioGroup aria-label="age" name="age"  >
              <FormGroup row>
                <FormControlLabel value="female" control={<Radio />} label="ระบุอายุเริ่มต้น" />
                <TextField label="อายุเริ่มต้น" defaultValue={''} variant="outlined" margin="normal" size="small" />
              </FormGroup>

              <FormControlLabel value="male" control={<Radio />} label="ไม่ระบุ" />
              <FormGroup row>
                <FormControlLabel value="other" control={<Radio />} label="ระบุช่วงอายุ" />
                <TextField label="อายุ" defaultValue={''} variant="outlined" margin="normal" size="small" />

                <TextField label="อายุ" defaultValue={''} variant="outlined" margin="normal" size="small" />
              </FormGroup>
            </RadioGroup>
          </FormControl>
        </Row>
        <Row>
          <FormControl component="fieldset" >
            <FormLabel component="legend">ประสบการณ์ทำงานในตำแหน่งงาน </FormLabel>
            <RadioGroup aria-label="exp" name="exp"  >
              <FormGroup row>
                <FormControlLabel value="no" control={<Radio />} label="ไม่จำเป็นต้องมีประสบการณ์" />
                <FormGroup row>
                  <FormControlLabel value="yes" control={<Radio />} label="มีประสบการณ์อย่างน้อย" />
                  <TextField label="จำนวนปี" defaultValue={''} variant="outlined" margin="normal" size="small" />
                </FormGroup>

              </FormGroup>
            </RadioGroup>
          </FormControl>
        </Row>
        <Row>
          <FormControl component="fieldset" >
            <FormLabel component="legend">ประเภทการจ้างงาน </FormLabel>
            <RadioGroup aria-label="type" name="exp"  >
              <FormGroup >
                <FormGroup row>
                  <FormControlLabel value="day" control={<Radio />} label="รายวัน" />
                  <TextField label="อัตราค่าจ้างต่อวัน" defaultValue={''} variant="outlined" margin="normal" size="small" />
                </FormGroup>
                <FormGroup row>
                  <FormControlLabel value="month" control={<Radio />} label="รายเดือน" />
                  <TextField label="อัตราค่าจ้างต่อเดือน" defaultValue={''} variant="outlined" margin="normal" size="small" />
                </FormGroup>
                <FormGroup row>
                  <FormControlLabel value="hour" control={<Radio />} label="ตามช่วงเวลา(เข้ากะทำงาน)" />
                  <TextField label="อัตราค่าจ้างต่อชั่วโมง" defaultValue={''} variant="outlined" margin="normal" size="small" />
                </FormGroup>
                <FormGroup row>

                  <FormControlLabel value="other" control={<Radio />} label="อื่นๆ" />
                  <TextField label="โปรดระบุ" defaultValue={''} variant="outlined" margin="normal" size="small" />
                  <TextField label="อัตราค่าจ้าง" defaultValue={''} variant="outlined" margin="normal" size="small" />
                </FormGroup>
              </FormGroup>
            </RadioGroup>
          </FormControl>
        </Row>

        <Row>
          <FormControl component="fieldset" >
            <FormLabel component="legend">ประเภทการจ้างงาน </FormLabel>
            <RadioGroup aria-label="workday" name="exp"  >
              <FormGroup >
                <FormGroup row>
                  <FormControlLabel value="everyday" control={<Radio />} label="ทำงานทุกวัน ไม่มีวันหยุด หยุดเฉพาะวันนักขัตฤกษ์" />

                </FormGroup>
                <FormGroup row>
                  <FormControlLabel value="6day" control={<Radio />} label="วันจันทร์ - วันเสาร์ หยุดเฉพาะวันอาทิตย์" />

                </FormGroup>
                <FormGroup row>
                  <FormControlLabel value="weekday" control={<Radio />} label="วันจันทร์ - วันศุกร์ หยุดวันเสาร์ และ วันอาทิตย์" />

                </FormGroup>
                <FormGroup row>

                  <FormControlLabel value="other" control={<Radio />} label="อื่นๆ" />
                  <TextField label="โปรดระบุ" defaultValue={''} variant="outlined" margin="normal" size="small" />
                </FormGroup>
              </FormGroup>
            </RadioGroup>
          </FormControl>
        </Row>
        <Row>
          <FormControl component="fieldset" >
            <FormLabel component="legend">ช่วงเวลาเข้า-ออกงานในแต่ละวัน </FormLabel>
            <RadioGroup aria-label="worktime" name="exp"  >
              <FormGroup >

                <FormControlLabel value="1" control={<Radio />} label="ทำงานตั้งแต่เวลา 8.00 น. - 17.30 น." />



                <FormControlLabel value="2" control={<Radio />} label="ทำงานตั้งแต่เวลา 9.00 น. - 18.00 น." />


                <FormGroup row>

                  <FormControlLabel value="other" control={<Radio />} label="ช่วงเวลาอื่น โปรดระบุ" />
                  <TextField label="เวลาเข้างาน" defaultValue={''} variant="outlined" margin="normal" size="small" />
                  <TextField label="เวลาออกงาน" defaultValue={''} variant="outlined" margin="normal" size="small" />
                </FormGroup>
              </FormGroup>
            </RadioGroup>
          </FormControl>
        </Row>
        <Row>
          <FormControl component="fieldset" >
            <FormLabel component="legend">ค่าล่วงเวลา </FormLabel>
            <RadioGroup aria-label="ot" name="exp"  >
              <FormGroup row>

                <FormControlLabel value="1" control={<Radio />} label="มี" />

                <FormControlLabel value="2" control={<Radio />} label="ไม่มี" />
              </FormGroup>
            </RadioGroup>
          </FormControl>
        </Row>
        <Row>
          <FormControl component="fieldset" >
            <FormLabel component="legend">โบนัสประจำปี </FormLabel>
            <RadioGroup aria-label="bonus" name="exp"  >
              <FormGroup row>

                <FormControlLabel value="1" control={<Radio />} label="มี" />

                <FormControlLabel value="2" control={<Radio />} label="ไม่มี" />
              </FormGroup>
            </RadioGroup>
          </FormControl>
        </Row>
        <Row>
          <FormControl component="fieldset" >
            <FormLabel component="legend">ประกันสังคม </FormLabel>
            <RadioGroup aria-label="socialinsurance" name="exp"  >
              <FormGroup row>

                <FormControlLabel value="1" control={<Radio />} label="มี" />

                <FormControlLabel value="2" control={<Radio />} label="ไม่มี" />
              </FormGroup>
            </RadioGroup>
          </FormControl>
        </Row>
        <Row>
          <FormControl component="fieldset" >
            <FormLabel component="legend">ประกันสุขภาพ </FormLabel>
            <RadioGroup aria-label="insurance" name="exp"  >
              <FormGroup row>

                <FormControlLabel value="1" control={<Radio />} label="มี" />

                <FormControlLabel value="2" control={<Radio />} label="ไม่มี" />
              </FormGroup>
            </RadioGroup>
          </FormControl>
        </Row>
        <Row>
          <FormControl component="fieldset" >
            <FormLabel component="legend">สวัสดิการเพิ่มเติม </FormLabel>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox checked={false} />}
                label="ฟรีห้องพัก"
              />
              <FormControlLabel
                control={<Checkbox checked={false} />}
                label="ทีวี"
              />
              <FormControlLabel
                control={<Checkbox checked={false} />}
                label="พัดลม"
              />
              <FormControlLabel
                control={<Checkbox checked={false} />}
                label="หม้อหุงข้าว"
              />
              <FormControlLabel
                control={<Checkbox checked={false} />}
                label="ตู้เย็น"
              />
              <FormControlLabel
                control={<Checkbox checked={false} />}
                label="ฟรีค่าน้ำ"
              />
              <FormControlLabel
                control={<Checkbox checked={false} />}
                label="ฟรีค่าไฟฟ้า"
              />
              <FormControlLabel
                control={<Checkbox checked={false} />}
                label="wifi"
              />
              <FormControlLabel
                control={<Checkbox checked={false} />}
                label="อาหารกลางวัน"
              />
              <FormControlLabel
                control={<Checkbox checked={false} />}
                label="อาหาร 3 มื้อ"
              />

            </FormGroup>

          </FormControl>
        </Row>
        <TextField multiline rows={3} label="รายละเอียดการทำงาน" defaultValue={'นอกจากเสริฟก๋วยเตี๋ยวแล้ว ก็ล้างจาน เก็บกวาดร้าน ไปช่วยจ่ายตลาดช่วงเช้า 6 โมง'} variant="outlined" margin="normal" size="small" fullWidth />
        <Divider style={{margin:'20px'}}/>
        <h3 >คุณสมบัติของผู้สมัคร และแบบสอบถาม </h3>
        <Row>
          <FormControl component="fieldset" >
            <FormLabel component="legend">ต้องการผู้มีใบอนุญาตทำงาน </FormLabel>
            <RadioGroup aria-label="socialinsurance" name="exp"  >
              <FormGroup row>
                <FormControlLabel value="1" control={<Radio />} label="ไม่ใช่" />
                <FormControlLabel value="2" control={<Radio />} label="ใช่" />
              </FormGroup>
            </RadioGroup>
          </FormControl>
        </Row>
        <Row>
          <FormControl component="fieldset" >
            <FormLabel component="legend">ต้องการผู้ขับรถยนต์ได้ </FormLabel>
            <RadioGroup aria-label="socialinsurance" name="exp"  >
              <FormGroup row>
                <FormControlLabel value="1" control={<Radio />} label="ไม่ใช่" />
                <FormControlLabel value="2" control={<Radio />} label="ใช่" />
              </FormGroup>
            </RadioGroup>
          </FormControl>
        </Row>
        <Row>
          <FormControl component="fieldset" >
            <FormLabel component="legend">ต้องการผู้ขับจักรยานยนต์ได้ </FormLabel>
            <RadioGroup aria-label="socialinsurance" name="exp"  >
              <FormGroup row>
                <FormControlLabel value="1" control={<Radio />} label="ไม่ใช่" />
                <FormControlLabel value="2" control={<Radio />} label="ใช่" />
              </FormGroup>
            </RadioGroup>
          </FormControl>
        </Row>
        <Row>
          <FormControl component="fieldset" >
            <FormLabel component="legend">ต้องการผู้สื่อสารภาษาไทยได้ </FormLabel>
            <RadioGroup aria-label="socialinsurance" name="exp"  >
              <FormGroup row>
                <FormControlLabel value="1" control={<Radio />} label="ไม่ใช่" />
                <FormControlLabel value="2" control={<Radio />} label="ใช่" />
              </FormGroup>
            </RadioGroup>
          </FormControl>
        </Row>
        <Row>
          <h6>กรุณาระบุความต้องการทักษะด้านภาษาไทย สำหรับกรณีตอบว่าใช่</h6>
        </Row>
        <Row>
          <FormControl component="fieldset" >
            <FormLabel component="legend">ระดับการฟังภาษาไทย </FormLabel>
            <RadioGroup aria-label="socialinsurance" name="exp"  >
              <FormGroup row>
                <FormControlLabel value="1" control={<Radio />} label="พอได้" />
                <FormControlLabel value="2" control={<Radio />} label="ปานกลาง" />
                <FormControlLabel value="3" control={<Radio />} label="ดี" />
              </FormGroup>
            </RadioGroup>
          </FormControl>
        </Row>
        <Row>
          <FormControl component="fieldset" >
            <FormLabel component="legend">ระดับการพูดภาษาไทย </FormLabel>
            <RadioGroup aria-label="socialinsurance" name="exp"  >
              <FormGroup row>
                <FormControlLabel value="1" control={<Radio />} label="พอได้" />
                <FormControlLabel value="2" control={<Radio />} label="ปานกลาง" />
                <FormControlLabel value="3" control={<Radio />} label="ดี" />
              </FormGroup>
            </RadioGroup>
          </FormControl>
        </Row>
        <Row>
          <FormControl component="fieldset" >
            <FormLabel component="legend">ระดับการอ่านภาษาไทย </FormLabel>
            <RadioGroup aria-label="socialinsurance" name="exp"  >
              <FormGroup row>
                <FormControlLabel value="1" control={<Radio />} label="พอได้" />
                <FormControlLabel value="2" control={<Radio />} label="ปานกลาง" />
                <FormControlLabel value="3" control={<Radio />} label="ดี" />
              </FormGroup>
            </RadioGroup>
          </FormControl>
        </Row>
        <Row>
          <FormControl component="fieldset" >
            <FormLabel component="legend">ระดับการเขียนภาษาไทย </FormLabel>
            <RadioGroup aria-label="socialinsurance" name="exp"  >
              <FormGroup row>
                <FormControlLabel value="1" control={<Radio />} label="พอได้" />
                <FormControlLabel value="2" control={<Radio />} label="ปานกลาง" />
                <FormControlLabel value="3" control={<Radio />} label="ดี" />
              </FormGroup>
            </RadioGroup>
          </FormControl>
        </Row>
        <Divider style={{margin:'20px'}}/>
        <MdAddBox size="50px" color="green" onClick={this.addQuestion} />
        <FaMinusCircle size="40px" color="red" onClick={this.popQuestion} />

        {this.state.additionalQuestion.map(item => {
          return <div id="additional-question-container">
            <TextField label="ตั้งคำถามเพิ่มเติมสำหรับผู้สมัคร" defaultValue={''} variant="outlined" margin="normal" size="small" fullWidth />
            <FormControl component="fieldset" >
              <FormLabel component="legend">รูปแบบคำตอบที่ต้องการ </FormLabel>
              <RadioGroup aria-label="socialinsurance" name="exp"  >
                <FormGroup row>
                  <FormControlLabel value="1" control={<Radio />} label="ใช่ - ไม่ใช่" />
                  <FormControlLabel value="2" control={<Radio />} label="ให้เลือกตอบเป็นระดับ ประกอบด้วย พอใช้ - ปานกลาง - ดี" />
                  <FormControlLabel value="3" control={<Radio />} label="ให้เขียนคำตอบ" />
                </FormGroup>
              </RadioGroup>
            </FormControl>
          </div>
        })}

      </form>
    </div>;
  }
}
