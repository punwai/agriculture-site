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
                <Container fluid className="home-container">
                    <Row className="filler">
                    </Row>
                    <Row>
                        <Container className="bannerText">
                            ออเดอร์ของคุณ
                        </Container>   
                    </Row>
                </Container>
                <br/>
                <br/>
                <Container>
                    {this.state.order &&
                        <div>
                            <h2>
                            Your reference ID is: {this.state.order.referenceId}
                            </h2>
                            <h4>
                                Next Steps: Please add the line official account, and send over your reference ID. Please allow 2-3 business days to be matched to another user for time sharing.
                                When your order is confirmed, a payment option will be sent to you.
                            </h4>
                            <div class="line-it-button" data-lang="en" data-type="friend" data-lineid="@803ssfip"></div>
                            <Button> Add Friend Line Official Account Button </Button>
                            <h4>
                                ## ตรงนี้ใส่เป็นเหมือนใบเสร็จได้
                            </h4>
                        </div>         
                    }
                    <script src="https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js" async="async" defer="defer"></script>
                </Container>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { basket: state.basket }
}

export default connect(mapStateToProps)(withRouter(Order));
