import React, { Component, useParams } from 'react';
import { Nav, Navbar, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './Order.scss';
import { connect } from 'react-redux';
import { db } from '../../firebase';
import { withRouter } from 'react-router-dom';

class Order extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            order: []
        };
    }

    getOrder() {
        var orderId = this.props.match.params.id
        db.collection('orders').doc(orderId)
		.get()
		.then((doc) => {
            if(doc.exists){
                var item = {
                    referenceId: doc.data().referenceId,
                    firstName: doc.data().firstName,
                    lastName: doc.data().lastName,
                    lineID: doc.data().lineID,
                    phoneNumber: doc.data().phoneNumber,
                    startRentalDate: doc.data().startRentalDate,
                    endRentalDate: doc.data().endRentalDate,
                    rentalItems: doc.data().rentalItems,
                    address: doc.data().address
                };
                this.setState({order: item})    
            }
		})
		.catch((err) => {
			console.error(err);
		});
    }

    render() {
        this.getOrder()
        return (


            <div>
            <div className="home-container">
              <img class="secondsvg" src={require("../interim.svg")} alt="Kiwi standing on oval"/>
            </div>
            <Container className="shadow login-container text-center padding-large">
                    <Col className="bannerText text-center">
                        การสั่งซื้อของคุณ
                    </Col>   
                    <br/>
                    <br/>
                    {this.state.order &&
                        <Col>
                            <h2>
                            เลขที่การสั่งซื้อของคุณคือ: {this.state.order.referenceId}
                            </h2>
                            <h4>
                                ชำระผ่านโอนเข้าธนาคาร
                            </h4>
                            <p>
                                1. เพิ่มเพื่อน LINE OFFICIAL ACCOUNT ของดินไร่และส่งเลขที่การสั่งซื้อของคุณพร้อมรูปถ่ายบัตรประชาชน
                            </p>
                            <p>
                                2. เมื่อเราได้ยืนยันว่าที่อยู่ของคุณสามารถใช้ระบบไทมแชร์ได้ เราจะส่งเลขที่บัญชีไปให้
                            </p>
                            <p>
                                3. โอนเงินมาตามจำนวนที่ได้ระบุไว้ก่อนหน้า
                            </p>
                            <div class="line-it-button" data-lang="en" data-type="friend" data-lineid="@803ssfip"></div>
                            <a href="line://ti/p/@803ssfip"><Button className="lineButton"> DinRai LINE Official Account </Button></a>
                        </Col>         
                    }
            </Container>   
        </div>
        

        )
    }
}

function mapStateToProps(state) {
    return { basket: state.basket }
}

export default connect(mapStateToProps)(withRouter(Order));
