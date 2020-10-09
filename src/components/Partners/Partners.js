import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './Partners.scss';
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Partners extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            
        };
    }

    componentDidMount() {
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
                <div className="home-container green-container ">
                  <Container className="text-left text-light"><h2 className="m-0">Partner with us</h2></Container>
                </div>
                <div className="home-container image-container model-container">
                  <h2 className="inside-text"> บริษัทไทยร่วมมือช่วยเกษตรไทย </h2>
                </div>
                <br/>
                <Container className="small-container">
                <br/>
                    <Row>
                        <Col xs={6} md={3} className="p-4"><img src={require('../../static/ktw-logo.png')} alt="React Logo" width="100%"/>
                        </Col>
                        <Col xs={6} md={3} className="p-4"><img src={require('../../static/polo-logo.png')} alt="React Logo" width="100%"/>
                        </Col>
                        <Col xs={6} md={3} className="p-4"><img src={require('../../static/b-quik.png')} alt="React Logo" width="100%"/>
                        </Col>
                        <Col xs={6} md={3} className="p-4"><img src={require('../../static/ebara.png')} alt="React Logo" width="100%"/>
                        </Col>
                    </Row>
                    <br/>
                    <h2>DinRai runs off <i>your help</i> </h2>
                    <p>
                      Any form of sustainable model involves a marriage between the existing industry with novel ideas. As a non-profit, we have designed our
                      model to be nearly independent from any kind of active donations. We only require around 10% of donations to deal with
                      emergencies such as unaccounted maintenance costs or extra shipping costs - essentially buffer assets to ensure DinRai does not suddenly
                      collapse. This is only achievable through partnerships in many aspects - from supplying products at lower-than-market prices,
                      country-wide low-cost shipping, and maintenance at their service stations.
                    </p>
                    <h2>Our Partners</h2>
                    <Row>
                      <Col xs={2} md={4} className="p-4"><img src={require('../../static/ktw-logo.png')} alt="React Logo" width="100%"/>
                      </Col>
                      <Col xs={6} md={6} className="p-4">
                        <h4>KTW - Logistics Partner</h4>
                        <p>The leading powertools distributor of Thailand, with delivery networks spanning from Chiangmai to Songkhla </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={2} md={4} className="p-4"><img src={require('../../static/polo-logo.png')} alt="React Logo" width="100%"/>
                      </Col>
                      <Col xs={6} md={6} className="p-4">
                        <h4>JASIC - Product Partner</h4>
                        <p>Popular welding tools manufacturer in China and Thailand.</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={2} md={4} className="p-4"><img src={require('../../static/b-quik.png')} alt="React Logo" width="100%"/>
                      </Col>
                      <Col xs={6} md={6} className="p-4">
                        <h4>BQuik - Maintenance Partner</h4>
                        <p>Automotive reparations service throughout Thailand. </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={2} md={4} className="p-4"><img src={require('../../static/ebara.png')} alt="React Logo" width="100%"/>
                      </Col>
                      <Col xs={6} md={6} className="p-4">
                        <h4>Ebara - Product Partner</h4>
                        <p>Waterpumps manufacturer of Japan</p>
                      </Col>
                    </Row>
                </Container>
                <Container>
                    <div className="specialContainer">
                    <Slider {...settings}>
                        {/* { this.state.itemsList.map((item, index) =>
                                <Card className="m-3">
                                </Card>
                            )
                        } */}
                    </Slider>
                    </div>
                </Container>

            </div>
        )
    }
}
