import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './Model.scss';
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
                    <h2>1. Modernization</h2>
With better equipment, higher crop qualities can be achieved, and more time and labor can be spent on
education and part-time jobs. We identify 2 distinct equipment usage practices: those who rely on
traditional method, and those hiring local agricultural services. To cultivate a 8-rai farm require the work
of 4-5 family members using hand tools, or typically cost around 4000 baht for a 8-rai farm to hire a
machinery service. It is simply not worth it to hire, but how can farmers purchase 20,000 baht
equipment when they are in-debt from fertilizers every season from cooperatives?<br/><br/>
The distinct Thai farming seasons allow farmers to split this cost. Rain-focused rice farms, are only able
to operate 6 months a year, while certain fruit farms only require equipment 3-4 months a year to either
replant old, dying fruit-yielding fields (eg. Durian, Mango, Rambutan, Starfruit, Coconut), or to simply
sow the seeds to begin a new crop field (eg. Grape, Ginger). Our equipment time-sharing halves the
price of equipment with this underlying fact (although our partners provide their equipment to us at a
no-profit price, so the resulting prices drop as low to as 40%).
<br/><br/>
<h2>2. Fair Trade</h2>
Current models of price rice regulation involves a published ‘Average Monthly Rice Price’ document sent
out by the government each month. However, heavy fluctuations still occur due to the low bargaining
power farmers have.
<br/><br/>
This low bargaining power is based off the lack of information. Mills disclose their buying prices, so
farmers sell to the mills either because: 1. Their buying prices have been recommended to them through
word of mouth and 2. Past proven experiences with the mills. But this means that a farmer typically
know of and have worked with only 2-3 mills in the vicinity. Buyers can simply suggest lower buying prices, and farmers will have to accept it. Our buying-price reporting service allow farmers to evaluate
their options with information from crowd-reporting.
<br/><br/>

<h2>3. Income Expansion</h2>
Better equipment can only get a farm so far, at a certain point, only larger farms will provide more
income. In the Isaan province, farmers inherit familial lands, which are commonly small and commonly
range from 4 to 10 rai. A 4-rai farm will typically yield around 5 tons of rice every year, which sell for
around 150,000 baht. Taking away the fertilizer and equipment costs, yearly profits can be as low as
around 96,000 baht, way below the minimum wage.
<br/><br/>
For farmers who’s lands are this small, it is unrealistic to devote their entire livelihood to agriculture.
Many move out to work full-time city jobs, or rely on family members living in the city to provide
monetary support. On the other hand, for farmers who have inherited larger plots, their income is high
enough to live, but to financially grow, they need larger plots.
We strive to change agricultural practices to those like in Japan, where farmers operate huge plots. We
at RaiLink are currently developing a land-leasing platform where contracts can be made and stored
with a smart-contract.                    </p>
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