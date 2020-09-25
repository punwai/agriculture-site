import React, { Component } from 'react';
import { Nav, Navbar, Form, Spinner, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './Mills.scss';
import { db } from '../../firebase';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Mills extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            millsList: [],
            loading: true
        };
    }

    initItems(){
        db.collection('mills')
		.get()
		.then((data) => {
			let mills = [];
			data.forEach((doc) => {
                let avg = 0
                for(let i = 0; i < doc.data().user_ratings.length; i++){
                    avg += doc.data().user_ratings[i].price
                }
				mills.push({
                    id: doc.id,
                    address: doc.data().address,
                    description: doc.data().description,
                    name: doc.data().name,
                    province: doc.data().province,
                    rating: doc.data().rating,
                    user_ratings: doc.data().user_ratings,
                    avg_price: Math.round(avg/doc.data().user_ratings.length)
				});
            });
            this.setState({millsList: mills})
		})
		.catch((err) => {
			console.error(err);
		});
        console.log(this.state.millsList)

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

    addToCart = (index, e) => {
        this.props.dispatch({type: 'ADD_ITEM', item: this.state.itemsList[index]})
    }

    removeFromCart = (index, item) => {
        this.props.dispatch({type: 'REMOVE_ITEM', item: this.state.itemsList[index]})
    }


    render() {
        console.log(this.state.millsList)
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
                    <Container >
                        <h2 style={{ fontWeight: "600"}} className="">เมนูราคาโรงสี</h2>
                        <h2 className="subtitle" style={{ fontSize: "24px" }}>รายการที่พบเจอ <span style={{ color: "grey"}}>( {this.state.millsList.length} รายการ )</span> </h2>
                        <Row className="m-0">
                            <div className="divider"></div>
                            { this.state.millsList.map((item, index) =>
                                <Col>
                                    <Row>
                                        <Col xs={6} sm={4} md={4} lg={4}>
                                            <img width="100%" src={require("./no-image-available.jpg")} />
                                        </Col>
                                        <Col>
                                            <div style={{ fontSize: "20px", fontWeight: '550' }}>
                                                { item.name }
                                            </div>
                                            <div style={{ fontSize: "12px"}}>
                                                { item.address }
                                            </div>
                                            { item.description } 
                                            <br/> Average Buy Price: { item.avg_price } 
                                            <br/> RaiLink Metric: { item.user_ratings.length } 
                                            <br/> Total Price Reports: { item.user_ratings.length }
                                            <br/>
                                            <a href="/"> More Info </a>
                                        </Col>
                                        <div className="divider"></div>
                                    </Row>
                                </Col>
                                )
                            }
                        </Row>
                        มีข้อมูลใหม่? ถ้าหากคุณไม่สามารถค้นหาโรงสีที่ว่านั้นโปรดเติมข้อมูลเพื่อผลประโยชของสังคมคนเกี่ยวข้าว &nbsp;
                        <div>
                            <Button variant="danger">เพิ่มข้อมูล</Button>
                        </div>
                        <br/>
                        <br/>
                    </Container>
                </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { basket: state.basket, user: state.user }
}

export default connect(mapStateToProps)(withRouter(Mills));