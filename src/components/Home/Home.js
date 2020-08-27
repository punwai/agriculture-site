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
                    <Row className="filler">
                    </Row>
                    <Row>
                        <Container>
                            <Col style={{"padding":"0"}} className="homeText text-center">อุปกรณ์เกษตกร
                            </Col>
                        </Container>
                    </Row>
                    <Row className="filler">
                    </Row>
                </div>
                <br/>
                <br/>
                <Container>
                    <Row>
                        <Col md={4}></Col>
                        <Col>
                            <Col sm={2}></Col>
                            <Col sm={8}>                        <p>พวกเราเชื่อว่าชาวเกษตรสามารถซื้อถูกขายแพงได้ 

ด้วยระบบไทม์แชร์ของเราคุณสามารถซื้ออุปกรรณ์ที่สำคัญสำหรับแค่ช่วงเวลาที่คุณไช้

ซื้ออุปกรรณ์ในราคาต่ำกว่า 50% และหมดกังวลด้วยระบบประกัน 2 ปีของเรา 

หมดการเถียงกันเรื่องอุปกรรณ์ด้วยระบบ Mr Share ตัวกลางของเรา รับสินค้า ได้สินค้าเหมือนเช่าราคาเหมือนซื้อ!</p>
</Col>
                            <Col sm={2}></Col>
                        </Col>
                    </Row>
                </Container>
                <br/>
                <br/>
                <Container>
                    <h2 className="text-center">เช่าสินค้าคุณเลย</h2>
                    <Row>
                        <Col md={3} className="p-5"><img src={Graphics1} alt="React Logo" width="100%"/>
                            <div className="text-center mt-4 info-font">สั่งสินค้าจากเวบ</div>
                        </Col>
                        <Col md={3} className="p-5"><img src={Graphics4} alt="React Logo" width="100%"/>
                            <div className="text-center mt-4 info-font">จองเวลาไทม์แชร์</div>
                        </Col>
                        <Col md={3} className="p-5"><img src={Graphics3} alt="React Logo" width="100%"/>
                            <div className="text-center mt-4 info-font">รอยืนยันและจ่าย LINE</div>
                        </Col>
                        <Col md={3} className="p-5"><img src={Graphics2} alt="React Logo" width="100%"/>
                            <div className="text-center mt-4 info-font">ของส่งภายใน 2 อาทิตย์</div>
                        </Col>
                    </Row>
                    
                    <h2 className="text-center">สินค้าใหม่</h2>
                    <Row>
                        <Col>
                            <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={require("./Dir.jpeg")}/>
                                    <Card.Body>
                                        <Card.Text>
                                            เครื่องไถ
                                            ยี่ห้อโปโล
                                            <div className="oldPrice">
                                                THB7000
                                            </div>
                                            <span className="newPrice">
                                                THB3000 &nbsp;
                                            </span>
                                            <span>
                                                / 6  เดือน 3 ปี
                                            </span>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>                
                        </Col>
                        <Col>
                            <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={require("./Dir.jpeg")}/>
                                    <Card.Body>
                                        <Card.Text>
                                            เครื่องไถ
                                            ยี่ห้อโปโล
                                            <div className="oldPrice">
                                                THB7000
                                            </div>
                                            <span className="newPrice">
                                                THB3000 &nbsp;
                                            </span>
                                            <span>
                                                / 6  เดือน 3 ปี
                                            </span>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>                
                        </Col>
                        <Col>
                            <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={require("./Dir.jpeg")}/>
                                    <Card.Body>
                                        <Card.Text>
                                            เครื่องไถ
                                            ยี่ห้อโปโล
                                            <div className="oldPrice">
                                                THB7000
                                            </div>
                                            <span className="newPrice">
                                                THB3000 &nbsp;
                                            </span>
                                            <span>
                                                / 6  เดือน 3 ปี
                                            </span>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>                
                        </Col>
                        <Col>
                            <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={require("./Dir.jpeg")}/>
                                    <Card.Body>
                                        <Card.Text>
                                            เครื่องไถ
                                            ยี่ห้อโปโล
                                            <div className="oldPrice">
                                                THB7000
                                            </div>
                                            <span className="newPrice">
                                                THB3000 &nbsp;
                                            </span>
                                            <span>
                                                / 6  เดือน 3 ปี
                                            </span>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>                
                        </Col>
                    </Row>
                </Container>
                

            </div>
        )
    }
}
