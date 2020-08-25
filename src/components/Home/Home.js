import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './Home.scss';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Container fluid className="home-container">
                    <Row className="filler">
                    </Row>
                    <Row>
                        <Container>
                        <Col className="homeText">อุปกรณ์เกษตกร <br/>ไทม์แชร์ 6 เดือน 4 ปี <br/> ราคาถูก. ซื้อง่าย. หมดกังวล. <br/>
                            <Button className="home-button">
                                เริ่มต้นใช้เลย
                            </Button>
                        </Col>
                        </Container>   
                    </Row>
                    <Row className="filler">
                    </Row>
                </Container>
                <br/>
                <br/>
                <Container>
                    <h1>โครงการเราคืออะไร?</h1>
                    <p>การกญดรำ่ร่ดไพนา าพนำา นพาำนๆพาำน พนาำ นๆพาน ำาๆนพ านำๆไพา นาไพน าๆำไนพา นๆาพนำาไๆ นพาำๆไนพ านำไๆาพ นำาๆนพๆ การกญดรำ่ร่ดไพนา าพนำา นพาำนๆพาำน พนาำ นๆพาน ำาๆนพ านำๆไพา นาไพน าๆำไนพา นๆาพนำาไๆ นพาำๆไนพ านำไๆาพ นำาๆนพๆการกญดรำ่ร่ดไพนา าพนำา นพาำนๆพาำน พนาำ นๆพาน ำาๆนพ านำๆไพา นาไพน าๆำไนพา นๆาพนำาไๆ นพาำๆไนพ านำไๆาพ นำาๆนพๆการกญดรำ่ร่ดไพนา าพนำา นพาำนๆพาำน พนาำ นๆพาน ำาๆนพ านำๆไพา นาไพน าๆำไนพา นๆาพนำาไๆ นพาำๆไนพ านำไๆาพ นำาๆนพๆการกญดรำ่ร่ดไพนา าพนำา นพาำนๆพาำน พนาำ นๆพาน ำาๆนพ านำๆไพา นาไพน าๆำไนพา นๆาพนำาไๆ นพาำๆไนพ านำไๆาพ นำาๆนพๆการกญดรำ่ร่ดไพนา าพนำา นพาำนๆพาำน พนาำ นๆพาน ำาๆนพ านำๆไพา นาไพน าๆำไนพา นๆาพนำาไๆ นพาำๆไนพ านำไๆาพ นำาๆนพๆ</p>
                </Container>
                <br/>
                <br/>
                <Container>
                    <h1>สินค้าใหม่</h1>
                    <Row>
                        <Col>
                            <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" src={require("./Dir.jpeg")}/>
                                    <Card.Body>
                                        <Card.Title>เครื่องไถ</Card.Title>
                                        <Card.Text>
                                            AR-14730 <br/>
                                            ยี่ห้อ: โปโล
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
                        <Card style={{ width: '15rem' }} className="cust-card">
                                <Card.Img className="img-item" variant="top" src={require("./Dir.jpeg")}/>
                                <Card.Body>
                                    <Card.Title>เครื่องไถ</Card.Title>
                                    <Card.Text>
                                        AR-14730 <br/>
                                        ยี่ห้อ: โปโล
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
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={require("./Dir.jpeg")}/>
                                <Card.Body>
                                    <Card.Title>เครื่องไถ</Card.Title>
                                    <Card.Text>
                                        AR-14730 <br/>
                                        ยี่ห้อ: โปโล
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
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={require("./Dir.jpeg")}/>
                                <Card.Body>
                                    <Card.Title>เครื่องไถ</Card.Title>
                                    <Card.Text>
                                        AR-14730 <br/>
                                        ยี่ห้อ: โปโล
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
