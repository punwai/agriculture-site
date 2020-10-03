import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './Contact.scss';
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
                  <Container className="text-left text-light"><h2 className="m-0">Contact Us</h2></Container>
                </div>
                <div className="home-container image-container model-container">
                  <h2 className="inside-text"> การค้ายุติธรรม, การปลูกประสิทธิภาพ</h2>
                </div>
                <br/>
                <Container className="small-container">
                    <br/>
                    <h1 style={{ fontWeight: "600"}} className="">Contact Information</h1>
                    <p>
                      Note: Before approaching physical service centers please call organization tel. We need to inform our partners beforehand.
                    </p>
                    <p>
                      <b>Partner Physical Service Center (Rachaburi, Samut Sakhon, Nakhon Pathom, Bangkok):</b> Address: 366 ซอย พระยามนธาตุราชศรีพิจิตร์ Bang Bon, Bangkok 10150
                    </p>
                    <p>
                      <b>Partner Physical Service Center (Bangkok Center):</b> Address:  44 Yaowarat Rd, Chakkrawat, Samphanthawong, Bangkok 10100
                    </p>
                    <p>
                      <b>Partner Physical Service Center (Isaan region):</b> Address: 272 Thepharak Alley, Tambon Nai Mueang, Mueang Khon Kaen District, Khon Kaen 40000
                    </p>
                    <p>
                      <b>Queries and Maintenance Tel:</b> +662-867-1215 (Khaw Donsawat)
                    </p>
                    <p>
                      <b>Organization Tel:</b> +6681-711-1115
                    </p>
                    <p>
                      <b>Email:</b> dinrai@gmail.com
                    </p>
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
