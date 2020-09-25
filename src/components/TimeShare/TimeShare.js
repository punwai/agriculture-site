import React, { Component } from 'react';
import { Nav, Modal, Navbar, Spinner, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './TimeShare.scss';
import { db } from '../../firebase';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            { props.shownIndex } 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
    
class TimeShare extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            itemsList: [],
            modalShow: false,
            item: {},
            loading: true
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
        setTimeout(() => {
            this.setState({loading: false})
        }, 1000);          
    }

    routeChange = (index, e) => { 
        const id = this.state.itemsList[index].id;
        let path = `/timeshare/${id}`; 
        this.props.history.push(path);
    }

    openModal = (index) => {
        this.setState({modalShow: true})
        this.setState({shownIndex: index})
    }

    addToCart = (index, e) => {
        this.props.dispatch({type: 'ADD_ITEM', item: this.state.itemsList[index]})
    }

    removeFromCart = (index, item) => {
        this.props.dispatch({type: 'REMOVE_ITEM', item: this.state.itemsList[index]})
    }
    render() {
        console.log(this.props.basket)
        console.log(this.props.user)
        return (
            <div>

                {this.state.loading ? 
                    <div>
                        <Spinner animation="border" className="spinner" variant="success" size="lg" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                        <div className="white-flush">
                        </div>
                    </div>
                :
                    <div>
                    <br></br>
                    <Container className="ts-container">
                        <h2 className="subtitle" style={{ fontSize: "24px" }}>สินค้ารายการใหม่ <span style={{ color: "grey"}}>( {this.state.itemsList.length} รายการ )</span> </h2> 
                        <Button variant="success" style={{ fontSize: "14px", width:"100%" }} width="100%">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart-fill top-margin-minus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                            </svg>&nbsp;ชมดูตะกร้า (2)
                        </Button>
                        <Row className="m-0">
                            { this.state.itemsList.map((item, index) =>
                                <Col xs={6} sm={4} md={4} lg={3} className="p-1">
                                    {/* <Card className="hoverable" onClick={this.openModal.bind(item)}> */}
                                    <Card className="hoverable">
                                        <Card.Img variant="top" src={ item.image_url }></Card.Img>
                                        <Card.Body>
                                            <Card.Text>
                                                <div style={{ fontSize: "14px", fontWeight: '550' }}>
                                                    { item.name }
                                                </div>
                                                <div style={{ fontSize: "12px"}}>
                                                    ยี่ห้อ: { item.brand }
                                                </div>
                                                
                                                <div style={{ fontSize: "14px", fontWeight: "600" }} className="newPrice">
                                                    ฿{ item.price_discount }
                                                    <span style={{ fontSize: "12px"}}>
                                                    &nbsp;/  4 เดือน { item.year_cycle } ปี
                                                    </span>
                                                    &nbsp;
                                                    <span style={{ fontSize: "12px"}} className="oldPrice">
                                                    ฿{ item.price_normal }
                                                    </span>
                                                </div>

                                                { this.props.basket.findIndex(el => el.item.id == item.id) == -1 ? 
                                                    <Button className="p-1 mr-auto" style={{ fontSize: "12px"}} variant="danger" onClick={this.addToCart.bind(this,index)}>
                                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart3 top-margin-minus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                                        </svg>
                                                        &nbsp;
                                                        เพิ่มลงตะกร้า
                                                    </Button> :
                                                    <Button className="p-1 mr-auto" style={{ fontSize: "12px"}} variant="warning" onClick={this.removeFromCart.bind(this,index)}>
                                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart3 top-margin-minus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                                        </svg>
                                                        &nbsp;
                                                        ออกจากตะกร้า
                                                    </Button>
                                                }
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                )
                            }
                        </Row>
                    </Container>
                    </div>
                }

                <MyVerticallyCenteredModal
                    show={this.state.modalShow}
                    shownIndex={this.state.shownIndex}
                    onHide={() => this.setState({modalShow: false})}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { basket: state.basket, user: state.user }
}

export default connect(mapStateToProps)(withRouter(TimeShare));