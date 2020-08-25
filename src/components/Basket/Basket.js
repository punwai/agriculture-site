import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
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
            rentalItems: {
                // just copy the basket redux object into here 
            },
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

    render() {
        console.log(this.props.basket)
        return (
            <div>
                <Container fluid className="home-container">
                    <Row className="filler">
                    </Row>
                    <Row>
                        <Container className="bannerText">
                            ชำระเงิน
                        </Container>   
                    </Row>
                </Container>
                <br/>
                <br/>
                <Container>
                    <h1>ชำระเงิน</h1>
                    { this.props.basket.map((basketItem, index) =>
                        <Row>
                            <Col md={4}>
                                { basketItem.item.id }
                            </Col>
                            <Col md={4}>
                                { basketItem.item.name }
                            </Col>
                            <Col md={4}>
                                { basketItem.amount }
                            </Col>
                        </Row>
                    )}
                    <Form>
                        <Button variant="primary" onClick={this.sendOrder}>
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { basket: state.basket }
}

export default connect(mapStateToProps)(withRouter(Basket));
