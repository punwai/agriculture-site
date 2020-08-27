import React, { Component, useParams } from 'react';
import { Nav, Navbar, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { db } from '../../firebase';
import { withRouter } from 'react-router-dom';

class Admin extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            order: []
        };
    }

    sendOrder = () => {
        db.collection('items')
		.add({
            brand: "Polo",
            image_url: "https://firebasestorage.googleapis.com/v0/b/agri-app-71fce.appspot.com/o/polo.jpg?alt=media&token=e2380e66-a28d-4f64-8910-a20bca823c08",
            name: "เครื่องฉีดน้ำ",
            price_discount: "1000",
            price_normal: "2200",
            product_id: "xj3435",
            year_cycle: "4"
        })
		.catch((err) => {
			console.error(err);
        });
    }


    render() {
        return (
            <Button onClick={this.sendOrder}> Add Friend Line Official Account Button </Button>
        )
    }
}

export default Admin;
