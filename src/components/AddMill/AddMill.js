import React, { Component, FC, useState, useEffect, useCallback } from 'react';
import { Nav, Navbar, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './AddMill.scss';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { signInWithGoogle } from '../../firebase'
import { UserContext } from '../../providers/UserProvider'
import { db } from '../../firebase';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { withRouter } from "react-router-dom";
const animatedComponents = makeAnimated();

    

class AddMill extends Component {
  options = [
    {value: "กรุงเทพมหานคร", label: 'กรุงเทพมหานคร' },
    {value: "กระบี่", label: 'กระบี่' },
    {value:"กาญจนบุรี", label: 'กาญจนบุรี' },
    {value:"กาฬสินธุ์", label: 'กาฬสินธุ์' },
    {value:"กำแพงเพชร",label: 'กำแพงเพชร' },
    {value:"ขอนแก่น",label: 'ขอนแก่น' },
    {value:"จันทบุรี",label: 'จันทบุรี' },
    {value:"ฉะเชิงเทรา",label: 'ฉะเชิงเทรา' },
    {value:"ชลบุรี",label: 'ชลบุรี' },
    {value:"ชัยนาท",label: 'ชัยนาท' },
    {value:"ชัยภูมิ",label: 'ชัยภูมิ' },
    {value:"ชุมพร",label: 'ชุมพร' },
    {value:"เชียงราย",label: 'เชียงราย' },
    {value:"เชียงใหม่",label: 'เชียงใหม่' },
    {value:"ตรัง",label: 'ตรัง' },
    {value:"ตราด",label: 'ตราด' },
    {value:"ตาก",label: 'ตาก' },
    {value:"นครนายก",label: 'นครนายก' },
    {value:"นครปฐม",label: 'นครปฐม' },
    {value:"นครพนม",label: 'นครพนม' },
    {value:"นครราชสีมา",label: 'นครราชสีมา' },
    {value:"นครศรีธรรมราช",label: 'นครศรีธรรมราช' },
    {value:"นครสวรรค์",label: 'นครสวรรค์' },
    {value:"นนทบุรี",label: 'นนทบุรี' },
    {value:"นราธิวาส",label: 'นราธิวาส' },
    {value:"น่าน",label: 'น่าน' },
    {value: "หนองคาย",label: 'หนองคาย' },
    {value:  "หนองบัวลำภู",label: 'หนองบัวลำภู' },
    {value:   "บุรีรัมย์",label: 'บุรีรัมย์' },
    {value:   "ปทุมธานี",label: 'ปทุมธานี' },
    {value:    "ประจวบคีรีขันธ์",label: 'ประจวบคีรีขันธ์' },
    {value:  "ปราจีนบุรี",label: 'ปราจีนบุรี' },
    {value:  "ปัตตานี",label: 'ปัตตานี' },
    {value:   "พระนครศรีอยุธยา",label: 'พระนครศรีอยุธยา' },
    {value:"พังงา",label: 'พังงา' },
    {value: "พัทลุง",label: 'พัทลุง' },
    {value:   "พิจิตร",label: 'พิจิตร' },
    {value:  "พิษณุโลก",label: 'พิษณุโลก' },
    {value:"เพชรบุรี",label: 'เพชรบุรี' },
   {value:  "เพชรบูรณ์",label: 'เพชรบูรณ์' },
   {value:"แพร่",label: 'แพร่' },
   {value: "พะเยา",label: 'พะเยา' },
    {value: "ภูเก็ต",label: 'ภูเก็ต' },
    {value:"มหาสารคาม",label: 'มหาสารคาม' },
    {value:"แม่ฮ่องสอน",label: 'แม่ฮ่องสอน' },
    {value:"มุกดาหาร",label: 'มุกดาหาร' },
    {value:"ยะลา",label: 'ยะลา' },
    {value: "ยโสธร", label: 'ยโสธร' },,
    {value:"ร้อยเอ็ด",label: 'ร้อยเอ็ด' },
    {value: "ระนอง",label: 'ระนอง' },
    {value:"ระยอง",label: 'ระยอง' },
    {value: "ราชบุรี",label: 'ราชบุรี' },
    {value:"ลพบุรี",label: 'ลพบุรี' },
    {value:"ลำปาง",label: 'ลำปาง' },
    {value:"ลำพูน",label: 'ลำพูน' },
    {value:"เลย",label: 'เลย' },
    {value:"ศรีสะเกษ",label: 'ศรีสะเกษ' },
    {value: "สกลนคร",label: 'สกลนคร' },
    {value: "สงขลา",label: 'สงขลา' },
    {value:"สตูล",label: 'สตูล' },
    {value: "สมุทรปราการ",label: 'สมุทรปราการ' },
    {value:"สมุทรสงคราม",label: 'สมุทรสงคราม' },
    {value:"สมุทรสาคร",label: 'สมุทรสาคร' },
    {value: "สระแก้ว",label: 'สระแก้ว' },
    {value:"สระบุรี",label: 'สระบุรี' },
    {value:"สิงห์บุรี",label: 'สิงห์บุรี' },
    {value:"สุโขทัย",label: 'สุโขทัย' },
    {value:"สุพรรณบุรี",label: 'สุพรรณบุรี' },
    {value:"สุราษฎร์ธานี",label: 'สุราษฎร์ธานี' },
    {value:"สุรินทร์",label: 'สุรินทร์' },
    {value:"อ่างทอง",label: 'อ่างทอง' },
    {value:"อุดรธานี",label: 'อุดรธานี' },
    {value:"อุทัยธานี",label: 'อุทัยธานี' },
    {value:"อุตรดิตถ์",label: 'อุตรดิตถ์' },
    {value:"อุบลราชธานี",label: 'อุบลราชธานี' },
    {value:"อำนาจเจริญ",label: 'อำนาจเจริญ' },
  ]

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phone: "",
      province: "",
      address: "",
      line_id: "",
      types: {}
    };
  }
  
  handleName = (e) => {
    this.setState({name: e.target.value});
  }
  handleProvince= (e) => {
    console.log(e);
    this.setState({province: e});
  }
  handlePhone= (e) => {
    this.setState({phone: e.target.value});
  }
  handleAddress= (e) => {
    this.setState({address: e.target.value});
  }
  handleLine= (e) => {
    this.setState({line_id: e.target.value});
  }

  rice_types = []

  initItems(){
    db.collection('rice_types')
      .get()
      .then((data) => {
        data.forEach((doc) => {
          this.rice_types.push({
            value: doc.id,
            label: doc.data().name
          });
        });
      })
      .catch((err) => {
        console.error(err);
      });
    console.log(this.state.itemsList)
  }

  componentDidMount() {
    this.initItems()
  }

  handleType = (e) => {
    var types = {}
    if (e) {
      for(var i = 0; i < e.length; i++){
        types[e[i].value] = {}
        types[e[i].value].name = e[i].label
        types[e[i].value].reviews = {

        }
      }
  
    }
    console.log(types)
    this.setState({types: types})
  }


  addMill = () => {
    var docData = {
      name: this.state.name,
      phone: this.state.phone,
      province: this.state.province.value,
      address: this.state.address,
      line_id: this.state.line_id,
      rice_info: this.state.types
    };
    db.collection("mills").add(docData).then(() => {
        console.log("Document successfully written!");
        var path = `/mills`
        this.props.history.push(path);
    });
  
  }

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
                        <Form.Control value={this.state.name} type="text" onChange={this.handleName} placeholder="ชื่อโรงสี"/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>จังหวัด</Form.Label>
                      <Select placeholder="จังหวัด" value={this.state.province} onChange={this.handleProvince} options={this.options} />
                    </Form.Group>
                    
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>ที่อยู่โรงสี</Form.Label>
                        <Form.Control value={this.state.address} type="text" onChange={this.handleAddress} placeholder="ที่อยู่โรงสี"/>
                    </Form.Group> 
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>เบอร์โทร</Form.Label>
                        <Form.Control value={this.state.phone} type="text" onChange={this.handlePhone} placeholder="เบอร์โทร"/>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>ไอดีไลน์</Form.Label>
                        <Form.Control value={this.state.line_id} type="text" onChange={this.handleLine} placeholder="LINE ID"/>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>ชนิดข้าวที่รับ</Form.Label>
                        <Select
                          placeholder="ชนิดข้าว"
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          isMulti
                          onChange={this.handleType}
                          options={this.rice_types}
                        />
                    </Form.Group>
                    <Button disabled={ !(this.state.name &&  this.state.province && this.state.address )} onClick={this.addMill}>เพิ่มโรงสี</Button>
                  </Col>
                </Container>   
            </div>
        )
    }
}

export default withRouter(AddMill);