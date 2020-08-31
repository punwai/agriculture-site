import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './ItemPage.scss';
import { db } from '../../firebase';
import { withRouter } from "react-router-dom";

class ItemPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            item: []
        };
    }

    initItem(){
        db.collection('items').where("id", "==", true)
		.get()
		.then((data) => {
			let items = [];
			data.forEach((doc) => {
				items.push({
                    id: doc.id,
                    product_id: doc.data().product_id,
                    name: doc.data().name,
                    brand: doc.data().brand,
                    month_cycle: doc.data().month_cycle,
                    price_normal: doc.data().price_normal,
                    price_discount: doc.data().price_discount,
                    year_cycle: doc.data().year_cycle,
				});
            });
            this.setState({item: items[0]})
		})
		.catch((err) => {
			console.error(err);
		});
        console.log(this.state.itemsList)
    }

    componentDidMount() {
        this.initItem()
    }

    render() {
        console.log(this.state.itemsList)
        return (
            <div>
                <Container fluid className="home-container">
                    <Row className="filler">
                    </Row>
                    <Row>
                        <Container>
                        <Col className="bannerText">
                            สินค้าสั่งได้
                        </Col>
                        </Container>   
                    </Row>
                </Container>
                <br/>
                <Container>
                    <h2>สินค้าใหม่</h2>
                    <h4 style={{ fontSize: '10' }}>{ this.state.itemsList.length } รายการ</h4>
                    <Row>
                        { this.state.itemsList.map((item, index) =>
                            <Col md={3}>
                                <Card style={{ width: '16rem' }} id={ item.id } onClick={this.routeChange.bind(this,index)}>
                                    <Card.Img variant="top" src={require("./Dir.jpeg")}></Card.Img>
                                    <Card.Body>
                                        <Card.Text>
                                            <div style={{ fontSize: "20px" }}>
                                                { item.name } &nbsp;&nbsp;
                                            </div>
                                            ยี่ห้อ: { item.brand }
                                            <div className="oldPrice">
                                                THB{ item.price_normal }
                                            </div>
                                            <span className="newPrice">
                                                THB{ item.price_discount } &nbsp;
                                            </span>
                                            <span>
                                                /  4 เดือน { item.year_cycle } ปี
                                            </span>
                                            <br/>
                                            <span>
                                                <Button>
                                                    เพิ่มลงตะกร้า
                                                </Button>
                                            </span>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            )
                        }
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withRouter(TimeShare)