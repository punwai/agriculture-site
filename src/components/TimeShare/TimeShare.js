import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './TimeShare.scss';
import { getAllItems } from '../../items';
import { db } from '../../firebase';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class TimeShare extends Component {

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

    routeChange = (index, e) => { 
        const id = this.state.itemsList[index].id;
        let path = `/timeshare/${id}`; 
        this.props.history.push(path);
    }

    addToCart = (index, e) => {
        this.props.dispatch({type: 'ADD_ITEM', item: this.state.itemsList[index]})
    }

    render() {
        console.log(this.props.basket)
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
                    <h4>{ this.state.itemsList.length } รายการ</h4>
                    <Row>
                        { this.state.itemsList.map((item, index) =>
                            <Col md={3}>
                                <Card style={{ width: '16rem' }} id={ item.id } onClick={this.routeChange.bind(this,index)}>
                                    <Card.Img variant="top" src={ item.image_url }></Card.Img>
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
                                            <span>
                                                <Button variant="outline-success" onClick={this.addToCart.bind(this,index)}>
                                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart3 top-margin-minus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                                    </svg>
                                                    &nbsp;
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

function mapStateToProps(state) {
    return { basket: state.basket }
}

export default connect(mapStateToProps)(withRouter(TimeShare));