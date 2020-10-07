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
    {value: "หนองคาย",label: 'กรุงเทพมหานคร' },
    {value:  "หนองบัวลำภู",label: 'กรุงเทพมหานคร' },
    {value:   "บุรีรัมย์",label: 'กรุงเทพมหานคร' },
    {value:   "ปทุมธานี",label: 'กรุงเทพมหานคร' },
    {value:    "ประจวบคีรีขันธ์",label: 'กรุงเทพมหานคร' },
    {value:  "ปราจีนบุรี",label: 'กรุงเทพมหานคร' },
    {value:  "ปัตตานี",label: 'กรุงเทพมหานคร' },
    {value:   "พระนครศรีอยุธยา",label: 'กรุงเทพมหานคร' },
    {value:"พังงา",label: 'กรุงเทพมหานคร' },
    {value: "พัทลุง",label: 'กรุงเทพมหานคร' },
    {value:   "พิจิตร",label: 'กรุงเทพมหานคร' },
    {value:  "พิษณุโลก",label: 'กรุงเทพมหานคร' },
    {value:"เพชรบุรี",label: 'กรุงเทพมหานคร' },
   {value:  "เพชรบูรณ์",label: 'กรุงเทพมหานคร' },
   {value:"แพร่",label: 'กรุงเทพมหานคร' },
   {value: "พะเยา",label: 'กรุงเทพมหานคร' },
    {value: "ภูเก็ต",label: 'กรุงเทพมหานคร' },
    {value:"มหาสารคาม",label: 'กรุงเทพมหานคร' },
    {value:"แม่ฮ่องสอน",label: 'กรุงเทพมหานคร' },
    {value:"มุกดาหาร",label: 'กรุงเทพมหานคร' },
    {value:"ยะลา",label: 'กรุงเทพมหานคร' },
    {value: "ยโสธร", label: 'กรุงเทพมหานคร' },,
    {value:"ร้อยเอ็ด",label: 'กรุงเทพมหานคร' },
    {value: "ระนอง",label: 'กรุงเทพมหานคร' },
    {value:"ระยอง",label: 'กรุงเทพมหานคร' },
    {value: "ราชบุรี",label: 'กรุงเทพมหานคร' },
    {value:"ลพบุรี",label: 'กรุงเทพมหานคร' },
    {value:"ลำปาง",label: 'กรุงเทพมหานคร' },
    {value:"ลำพูน",label: 'กรุงเทพมหานคร' },
    {value:"เลย",label: 'กรุงเทพมหานคร' },
    {value:"ศรีสะเกษ",label: 'กรุงเทพมหานคร' },
    {value: "สกลนคร",label: 'กรุงเทพมหานคร' },
    {value: "สงขลา",label: 'กรุงเทพมหานคร' },
    {value:"สตูล",label: 'กรุงเทพมหานคร' },
    {value: "สมุทรปราการ",label: 'กรุงเทพมหานคร' },
    {value:"สมุทรสงคราม",label: 'กรุงเทพมหานคร' },
    {value:"สมุทรสาคร",label: 'กรุงเทพมหานคร' },
    {value: "สระแก้ว",label: 'กรุงเทพมหานคร' },
    {value:"สระบุรี",label: 'กรุงเทพมหานคร' },
    {value:"สิงห์บุรี",label: 'กรุงเทพมหานคร' },
    {value:"สุโขทัย",label: 'กรุงเทพมหานคร' },
    {value:"สุพรรณบุรี",label: 'กรุงเทพมหานคร' },
    {value:"สุราษฎร์ธานี",label: 'กรุงเทพมหานคร' },
    {value:"สุรินทร์",label: 'กรุงเทพมหานคร' },
    {value:"อ่างทอง",label: 'กรุงเทพมหานคร' },
    {value:"อุดรธานี",label: 'กรุงเทพมหานคร' },
    {value:"อุทัยธานี",label: 'กรุงเทพมหานคร' },
    {value:"อุตรดิตถ์",label: 'กรุงเทพมหานคร' },
    {value:"อุบลราชธานี",label: 'กรุงเทพมหานคร' },
    {value:"อำนาจเจริญ",label: 'กรุงเทพมหานคร' },
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