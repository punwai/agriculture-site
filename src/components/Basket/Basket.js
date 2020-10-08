import React, { Component } from 'react';
import { Nav, Navbar, Form, Table, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './Basket.scss';
import { connect } from 'react-redux';
import { db } from '../../firebase';
import { withRouter } from "react-router-dom";

class Basket extends Component {

    constructor(props) {
        super(props);
    }

    sendOrder = () => {
        db.collection('orders')
		.add({
            // Autogen ที่นี่เลย
            referenceId: (Math.random().toString(36).substring(2,5) + Math.random().toString(36).substring(2,5)),
            firstName: "",
            lastName: "",
            lineID: "",
            phoneNumber: "",
            startRentalDate: "DD MM",
            endRentalDate: "DD MM",
            rentalItems: this.props.basket,
            address: {
                "home": ""
            }
        })
		.then((doc) => {
            var path = `/order/${doc.id}`
            this.props.history.push(path);
		})
		.catch((err) => {
			console.error(err);
        });
    }

    removeOrder = (item, e) => {
        this.props.dispatch({type: 'REMOVE_ITEM', item: item.item})
    }

    calculatePrice = () => {
        var basket = this.props.basket;
        var total = 0;
        for(var i = 0; i < basket.length; i++){
            var sum = parseInt(basket[i].amount) * basket[i].item.price_discount
            total += sum;
        }
        return sum;
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Container fluid className="home-container">
                    <Row className="filler">
                    </Row>
                    <Row>
                        <Container className="bannerText">
                            ตะกร้าของคุณ
                        </Container>   
                    </Row>
                </Container>
                <br/>
                <br/>
                <Container>
                    <Table>
                        <tbody>
                            { this.props.basket.map((basketItem, index) =>
                            <tr>
                                <td>
                                    <img style={{width:"100px"}} variant="top" src={ basketItem.item.image_url }></img>
                                </td>
                                <td md={4}>
                                    { basketItem.item.name }<br/>
                                    <b>Brand: </b>
                                    { basketItem.item.brand }
                                </td>
                                <td md={4}>
                                    ฿{ basketItem.item.price_discount } / ราคา ไทม์แชร์
                                </td>
                                <td>
                                    <Button onClick={this.removeOrder.bind(this, basketItem)} className="p-1 mr-auto" style={{ fontSize: "12px"}} variant="danger">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                                    </svg>
                                    </Button>
                                </td>
                            </tr>
                            )}
                            <tr>
                                <td md={4}>
                                </td>
                                <td md={4}>
                                    <b>Total Price:</b>
                                </td>
                                <td>
                                    <b>฿{this.calculatePrice()}</b>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Form.Group controlId="formGroupEmail">
                        <Row>
                            <Col xs={6}>
                                <Form.Label>ชื่อ</Form.Label>
                                <Form.Control type="text" placeholder="ชื่อ"/>
                            </Col>
                            <Col xs={6}>
                                <Form.Label>นามสกุล</Form.Label>
                                <Form.Control type="text" placeholder="นามสกุล"/>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>เลขที่บัตรประชาชน</Form.Label>
                        <Form.Control type="text" placeholder="ที่อยู่"/>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>ที่อยู่</Form.Label>
                        <Form.Control type="text" placeholder="ที่อยู่"/>
                    </Form.Group>
                    <Form>
                        <Button variant="primary" onClick={this.sendOrder}>
                            Order
                        </Button>
                    </Form>
                </Container>
                <br/>
                <br/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { basket: state.basket }
}

export default connect(mapStateToProps)(withRouter(Basket));
