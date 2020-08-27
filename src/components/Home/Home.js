import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './Home.scss';
import Graphics1 from './graphics1.svg';
import Graphics2 from './graphics2.svg';
import Graphics3 from './graphics3.svg';
import Graphics4 from './graphics4.svg';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="home-container">
                    <Container>
                        <Row>
                            <Col xs={12} sm={12} lg={6} md={4}>
                                <img src={require('./mockupimg.png')} width="100%"/>
                            </Col>
                            <Col xs={12} sm={12} lg={6} md={8} className="pt-5 align-items-center">
                                <div className="bannerText pb-3">RaiLink อุปกรณ์เกษตร์ไทม์แชร์</div>
                                <div className="bannerDescription" >RaiLink คือโครงการเพื่อทำให้ อุปกรณ์เกษตร์ คุณภาพดี ทันสมัย เข้าถึงชาวเกษตร์ได้ ด้วยระบบไทม์แชร์ของเรา ใช้อุปกรณ์ในระยะเวลาเท่าที่คุณต้องการ เหมือนเช่าแต่คุ้มเหมือนซื้อเต็มราคา</div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <br/>
                <br/>
                <Container>
                    <Row>
                        <Col md={6}></Col>
                        <Col md={6}>
                            <p>พวกเราเชื่อว่าชาวเกษตรสามารถซื้อถูกขายแพงได้ 

ด้วยระบบไทม์แชร์ของเราคุณสามารถซื้ออุปกรรณ์ที่สำคัญสำหรับแค่ช่วงเวลาที่คุณไช้

ซื้ออุปกรรณ์ในราคาต่ำกว่า 50% และหมดกังวลด้วยระบบประกัน 2 ปีของเรา 

หมดการเถียงกันเรื่องอุปกรรณ์ด้วยระบบตัวกลางประกันของเรา รับสินค้า ได้สินค้าเหมือนเช่าราคาเหมือนซื้อ!</p>
                        </Col>
                    </Row>
                </Container>
                <br/>
                <br/>
                <Container>
                    <h2 className="text-center subtitle">เช่าง่าย 4 ขั้น</h2>
                    <p className="text-center">
                        ไม่ต้องตั้งอะไรใหม่ สั่งผ่านไลน์ ไม่ต้องมีอีเมล์!
                    </p>
                    <Row>
                        <Col xs={6} md={3} className="p-5"><img src={Graphics1} alt="React Logo" width="100%"/>
                            <div className="text-center mt-4 info-font">สั่งสินค้าจากเวบ</div>
                        </Col>
                        <Col xs={6} md={3} className="p-5"><img src={Graphics4} alt="React Logo" width="100%"/>
                            <div className="text-center mt-4 info-font">จองเวลาไทม์แชร์</div>
                        </Col>
                        <Col xs={6} md={3} className="p-5"><img src={Graphics3} alt="React Logo" width="100%"/>
                            <div className="text-center mt-4 info-font">รอยืนยันและจ่าย LINE</div>
                        </Col>
                        <Col xs={6} md={3} className="p-5"><img src={Graphics2} alt="React Logo" width="100%"/>
                            <div className="text-center mt-4 info-font">ของส่งภายใน 2 อาทิตย์</div>
                        </Col>
                    </Row>
                </Container>
                

            </div>
        )
    }
}
