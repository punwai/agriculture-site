import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './Mills.scss';
import { db } from '../../firebase';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Mills extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            millsList: []
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
                <br></br>
                <Container >
                    <Row className="m-0">
                        { this.state.millsList.map((item, index) =>
                            <Col xs={6} sm={4} md={12} lg={12} className="p-1">
                                <Card>
                                    <Card.Img variant="top" src={ item.image_url }></Card.Img>
                                    <Card.Body>
                                        <Card.Text>
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
    return { basket: state.basket, user: state.user }
}

export default connect(mapStateToProps)(withRouter(Mills));