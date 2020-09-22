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
                </Container>
            </div>
        )
    }
}

export default withRouter(ItemPage)