import React, { Component } from "react";
import { Card, Switch, FormControlLabel, InputLabel, Select, Divider, Grid,FormLabel ,FormControl,FormGroup ,Checkbox   } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import { Row, Col } from "react-bootstrap";



export default class ManageJobInfomation extends Component {
  render() {

    return <div>

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
              name="checkedB"
              color="primary"
              checked={true}
            />
          }
          label="ที่ทำงานตามที่อยู่ผู้ประกอบการ"
          labelPlacement="start"
        />

        <TextField label="ที่อยู่ที่ทำงาน" defaultValue={'555'} variant="outlined" margin="normal" fullWidth />
        <TextField label="ซอย" defaultValue={'วัดจันทร์'} variant="outlined" margin="normal" fullWidth />
        <TextField label="ถนน" defaultValue={'สาธุประดิษฐ์'} variant="outlined" margin="normal" fullWidth />

        <FormControl variant="outlined" fullWidth margin="normal">
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

        <FormControl variant="outlined" fullWidth margin="normal">
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

        <FormControl variant="outlined" fullWidth margin="normal">
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


        <TextField label="สถานที่ใกล้เคียงที่สังเกตได้" defaultValue={'ร้านกวยเตี๋ยวจานยักษ์'} variant="outlined" fullWidth margin="normal" />
        <TextField label="เบอร์ติดต่อ" defaultValue={'081 315 6485'} variant="outlined" fullWidth margin="normal" />
        <TextField label="Line ID" defaultValue={'big noodle'} variant="outlined" fullWidth margin="normal" />
        <TextField label="Facebook ID" defaultValue={'ร้านกวยเตี๋ยวจานยักษ์'} variant="outlined" fullWidth margin="normal" />
        <Divider />
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

        <FormControl component="fieldset" >
          <FormLabel component="legend">สัญชาติที่รับ </FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox checked={true}  name="gilad" />}
              label="ลาว"
            />
            <FormControlLabel
              control={<Checkbox checked={true}  name="jason" />}
              label="พม่า"
            />
            <FormControlLabel
              control={<Checkbox checked={true}  name="antoine" />}
              label="เขมร"
            />
          </FormGroup>
        </FormControl>
      </form>
    </div>;
  }
}
