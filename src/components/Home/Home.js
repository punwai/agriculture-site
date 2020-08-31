import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './Home.scss';
import Graphics1 from './graphics1.svg';
import Graphics2 from './graphics2.svg';
import Graphics3 from './graphics3.svg';
import Graphics4 from './graphics4.svg';
import Slider from "react-slick";
import { db } from '../../firebase';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            itemsList: []
        };
    }

    initItems(){
        db.collection('items')
		.get()
		.then((data) => {
			let items = [];
			data.forEach((doc) => {
				items.push({
                    id: doc.id,
                    image_url: doc.data().image_url,
                    product_id: doc.data().product_id,
                    name: doc.data().name,
                    brand: doc.data().brand,
                    month_cycle: doc.data().month_cycle,
                    price_normal: doc.data().price_normal,
                    price_discount: doc.data().price_discount,
                    year_cycle: doc.data().year_cycle,
				});
            });
            console.log(items)
            this.setState({itemsList: items})
		})
		.catch((err) => {
			console.error(err);
		});
        console.log(this.state.itemsList)
    }

    componentDidMount() {
        this.initItems()
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              }

            ]
        };
      
        return (
            <div>
                <div className="home-container">
                    <Container className="pt-5 pb-5">
                        <Row>
                            <Col xs={12} sm={12} lg={6} md={6}>
                                <img src={require('./mockupimg.png')} width="100%"/>
                            </Col>
                            <Col xs={12} sm={12} lg={6} md={6} className="pt-5 align-items-center">
                                <div className="bannerText pb-3">RaiLink อุปกรณ์เกษตรไทม์แชร์</div>
                                <div className="bannerDescription pb-3" >RaiLink คือองค์กรเพื่อทำให้ อุปกรณ์เกษตร คุณภาพดี ทันสมัย เข้าถึงชาวเกษตรได้ ด้วยระบบไทม์แชร์ของเรา ใช้อุปกรณ์ในระยะเวลาเท่าที่คุณต้องการ เหมือนเช่าแต่คุ้มเหมือนซื้อเต็มราคา</div>
                                <div className="bannerDescription pb-5"><Button href="/timeshare" style={{ width: "30%" }} variant="danger">                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart-fill top-margin-minus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>&nbsp;&nbsp;สั่งเลย!</Button></div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* <br/>
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
                </Container> */}
                <br/>
                <br/>
                <Container>
                    <h2 className="subtitle">เช่าง่าย 4 ขั้น</h2>
                    <p className="subdescription">
                        ไม่ต้องตั้งอะไรใหม่ แค่มีแอคเคา LINE ก็สั่งได้!
                    </p>
                    <Row>
                        <Col xs={6} md={3} className="p-5"><img src={Graphics1} alt="React Logo" width="100%"/>
                            <div className="text-center mt-4 info-font">สั่งสินค้าจากเวบ</div>
                        </Col>
                        <Col xs={6} md={3} className="p-5"><img src={Graphics4} alt="React Logo" width="100%"/>
                            <div className="text-center mt-4 info-font">จองเวลาไทม์แชร์</div>
                        </Col>
                        <Col xs={6} md={3} className="p-5"><img src={Graphics3} alt="React Logo" width="100%"/>
                            <div className="text-center mt-4 info-font">รอยืนยันและจ่ายผ่าน LINE</div>
                        </Col>
                        <Col xs={6} md={3} className="p-5"><img src={Graphics2} alt="React Logo" width="100%"/>
                            <div className="text-center mt-4 info-font">ของส่งภายใน 2 อาทิตย์</div>
                        </Col>
                    </Row>

                    <h2 className="subtitle">สินค้าเข้าใหม่!</h2>
                    <p className="subdescription">
                        สินค้าของเรานั้นสามารถนำไปใช้ในงานเกษตรหลายชนิด รวมไปถึงเกษตกรณ์ปลูกผลผักผลไม้ตามฤดูกาล
                    </p>
                </Container>
                <Container>
                    <div className="specialContainer">
                    <Slider {...settings}>
                        { this.state.itemsList.map((item, index) =>
                                <Card className="m-3">
                                    <Card.Img variant="top" src={ item.image_url }></Card.Img>
                                    <Card.Body>
                                        <Card.Text>
                                            <div style={{ fontSize: "14px", fontWeight: '550' }}>
                                                { item.name }
                                            </div>
                                            <div style={{ fontSize: "12px"}}>
                                                ยี่ห้อ: { item.brand }
                                            </div>
                                            
                                            <div style={{ fontSize: "14px", fontWeight: "600" }} className="newPrice">
                                                ฿{ item.price_discount }
                                                <span style={{ fontSize: "12px"}}>
                                                &nbsp;/  4 เดือน { item.year_cycle } ปี
                                                </span>
                                                &nbsp;
                                                <span style={{ fontSize: "12px"}} className="oldPrice">
                                                ฿{ item.price_normal }
                                                </span>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                        }
                    </Slider>
                    </div>
                </Container>

            </div>
        )
    }
}
