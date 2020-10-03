import React, { Component, FC, useState, useEffect, useCallback } from 'react';
import { Nav, Navbar, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './AddMill.scss';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { signInWithGoogle } from '../../firebase'
import { UserContext } from '../../providers/UserProvider'

class AddMill extends Component {
  province = [
"กรุงเทพมหานคร",
"กระบี่",
"กาญจนบุรี",
"กาฬสินธุ์",
"กำแพงเพชร",
"ขอนแก่น",
"จันทบุรี",
"ฉะเชิงเทรา",
"ชลบุรี",
 "ชัยนาท",
"ชัยภูมิ",
"ชุมพร",
"เชียงราย",
"เชียงใหม่",
"ตรัง",
"ตราด",
"ตาก",
"นครนายก",
"นครปฐม",
 "นครพนม",
"นครราชสีมา",
"นครศรีธรรมราช",
"นครสวรรค์",
"นนทบุรี",
 "นราธิวาส",
 "น่าน",
"หนองคาย",
"หนองบัวลำภู",
"บุรีรัมย์",
"ปทุมธานี",
"ประจวบคีรีขันธ์",
"ปราจีนบุรี",
 "ปัตตานี",
"พระนครศรีอยุธยา",
"พังงา",
 "พัทลุง",
"พิจิตร",
"พิษณุโลก",
"เพชรบุรี",
"เพชรบูรณ์",
"แพร่",
"พะเยา",
"ภูเก็ต",
 "มหาสารคาม",
"แม่ฮ่องสอน",
"มุกดาหาร",
"ยะลา",
 "ยโสธร",
 "ร้อยเอ็ด",
"ระนอง",
"ระยอง",
 "ราชบุรี",
"ลพบุรี",
 "ลำปาง",
"ลำพูน",
 "เลย",
"ศรีสะเกษ",
 "สกลนคร",
"สงขลา",
"สตูล",
"สมุทรปราการ",
"สมุทรสงคราม",
"สมุทรสาคร",
"สระแก้ว",
"สระบุรี",
"สิงห์บุรี",
"สุโขทัย",
"สุพรรณบุรี",
"สุราษฎร์ธานี",
"สุรินทร์",
"อ่างทอง",
"อุดรธานี",
"อุทัยธานี",
"อุตรดิตถ์",
"อุบลราชธานี",
"อำนาจเจริญ",
  ]

    render() {
        return (
            <div>
                <div className="home-container">
                  <img class="secondsvg" src={require("../interim.svg")} alt="Kiwi standing on oval"/>
                </div>
                <Container className="shadow login-container text-center padding-large">
                  <Col className="bannerText text-center">
                      เพิ่มโรงสี
                  </Col>
                  <Col>เพิ่มโรงสีเข้าระบบเลย</Col>
                  <Col className="text-left">
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>ชื่อโรงสี</Form.Label>
                        <Form.Control type="text" placeholder="ชื่อโรงสี"/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Province</Form.Label>
                      <Form.Control as="select">
                        { this.province.map((item, index) =>
                        <option>{item}</option>
                        )} 
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>ที่อยู่โรงสี</Form.Label>
                        <Form.Control type="text" placeholder="ที่อยู่โรงสี"/>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>เบอร์โทร</Form.Label>
                        <Form.Control type="text" placeholder="เบอร์โทร"/>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>ไอดีไลน์</Form.Label>
                        <Form.Control type="text" placeholder="LINE ID"/>
                    </Form.Group>
                    <Button>เพิ่มโรงสี</Button>
                  </Col>
                </Container>   
            </div>
        )
    }
}

export default AddMill;