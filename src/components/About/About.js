import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './About.scss';
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class About extends Component {

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
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              }

            ]
        };
      
        return (
            <div>
                <div className="home-container green-container">
                  <Container className="text-left text-light"><h2 className="m-0">The DinRai Mission</h2></Container>
                </div>
                <div className="home-container about-container image-container ">
                  <h2 className="inside-text">ทำไมถึงต้องมีดินไร่?</h2>
                </div>
                <br/>
                <Container className="small-container">
                    <br/>
                    <h3>It's <i>time</i> for our beloved Thai agriculture to change</h3>
                    <p className="normal-text">
                        We at DinRai are striving to create a society where agricultural practices and ways of lives can co-exist
                        with the rapidly changing Thai society. We believe that with the right development programs, incentives
                        and policies, it is not necessary for agricultural families to abandon their home and heritage or abandon
                        their children to find work in the cities, just to make basic living income.
                        <br/><br/>
                        Empowerment, technology, and sustainability is at the heart of our model, and our work has been
                        shaped by the words of farmers. As technologist ourselves, we believe Thai agricultural societies could
                        fundamentally shift through better communication, and implementing a sharing economy system. We
                        have drawn our inspiration from innovative companies such as Ricult, and will continue to look up
                        towards such leaders for future development.
                        <br/><br/>
                        We believe that Thai society is unique, and with a huge culture of trust and transparency.
                        Our sustainable model is designed to run at nearly no-cost, with only tiny donations required to offset
                        the small costs of yearly equipment maintenance and transport of equipment. We are incredibly
                        grateful of our partners, who have made all of this possible, by lending us a hand with their shipment
                        networks and maintenance services.
                    </p>
                    <br/>
                    <h5 className="subtitle">From the Founder</h5>
                    <br/>
                    <Row>
                      <Col md={6} lg={5}>
                      <img width="100%" src={require("./1600769328686.jpg")}></img><br/><br/>
                      </Col>
                      <Col md={6} lg={7}>
                        In this photo is Khaw and I. In my mouth is the greatest, sweetest longbean in the world, organically-grown locally in our beautiful province of Saraburi.
                        Thai agriculture feeds Thai people, but Thai farmers are amongst the poorest in the world.
                        Since perhaps 12, working with me on the floor of my family's warehouse have always been former farmers, including Khaw. Our country's lack of investment 
                        into the agricultural industry have led to a situation where Khaw and fellow co-workers are forced down to Bangkok to find sufficient income for their families.
                        After a discussion with Khaw about his family's farming practices led me to realize that we need to change our archaic agricultural
                        industry.
                        <br/><br/>
                      </Col>
                      <Col md={0} lg={3}></Col>
                    </Row>
                      As a mechanic, Khao now works part-time dealing with repairs in Bangkok and Isaan, while I am honored to lead the technology and operations team. Through our experience,
                      we have discovered that time-sharing is the tip of the iceberg, and our goal is far from reach, farmers are still limited by their tiny, inherited lands which can never
                      provide sufficient income regardless of how much is grown, we need to create change not only in the practices but the underlying system in land ownership and commerce.
                      Farmers shouldn't need to abandon their homes to escape poverty.<br/><br/>
                        - Pun Suppakit
                      <br/>
                      <br/>
                    <h5 className="subtitle">Our Strategy</h5>
                    <p>
                      Insert Diagram
                    </p>
                    <br/><br/>
                    <Row>
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
