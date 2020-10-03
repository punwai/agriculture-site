import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './About.scss';
import Slider from "react-slick";

// Import css files
import "./node_modules/slick-carousel/slick/slick.css";
import "./node_modules/slick-carousel/slick/slick-theme.css";

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
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              }

            ]
        };
      
        return (
            <div>
                <div className="home-container">
                </div>
                <br/>
                <Container style={{ maxWidth: "50%" }}>
                    <br/>
                    <h1 style={{ fontWeight: "700"}} className="">From The Founder</h1>
                    <p className="subdescription">
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
                    <h5 className="subtitle">Pun Suppakit Waiwitlikhit</h5>
                    <br/>
                    <img width="100%" src={require("./IMG_20200901_122603 (1).jpg")}></img>
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
