import React, { Component, FC, useState, useEffect, useCallback } from 'react';
import { Nav, Navbar, Form, FormControl, Button, Container, Row, Col, Card, Table } from 'react-bootstrap';
import './MillInfo.scss';
import { connect } from 'react-redux';
import { db } from '../../firebase';
import { withRouter } from 'react-router-dom';

 class Home extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
        mill: {}
    };
  }

  getOrder() {
      var millId = this.props.match.params.id
      db.collection('mills').doc(millId)
  .get()
  .then((doc) => {
        var rice_prices = []
        
        for(let [key, value] of Object.entries(doc.data().rice_info)){
            var price_item = {};
            price_item.name = value.name;
            price_item.id = key;
            let avg = 0
            var count = 0
            for(let [k, val] of Object.entries(value.reviews)){
                avg += val
                count += 1
            }
            avg = avg/count;
            price_item.avg = avg;
            rice_prices.push(price_item);
        }
        console.log(rice_prices)
				var mill = {
          id: doc.id,
          address: doc.data().address,
          name: doc.data().name,
          phone: doc.data().phone,
          line_id: doc.data().line_id,
          province: doc.data().province,
          rice_info: rice_prices
        };
        this.setState({
          mill: mill
        })
  })
  .catch((err) => {
    console.error(err);
  });
  }

  render() {
    this.getOrder()
    console.log(this.state.mill)
    return (
            <div>
                <div className="home-container">
                  <img class="secondsvg" src={require("../interim.svg")} alt="Kiwi standing on oval"/>
                </div>
                <Container className="shadow login-container text-center padding-large">
                  <Col className="bannerText text-center">
                      ข้อมูลโรงสี
                  </Col>
                  <Col className="text-left">
                    <div className="name"><b>ชื่อโรงสี:</b> {this.state.mill.name}</div>
                    <div><b>ที่อยู่:</b> {this.state.mill.address}</div>
                    <div><b>จังหวัด:</b> {this.state.mill.province}</div>
                    <div>CONTACT:</div>
                    <div><b>ชื่อโรงสี:</b> {this.state.mill.phone}</div>
                    <div><b>ชื่อโรงสี:</b> {this.state.mill.line_id}</div>
                    <br></br>
                    <div>Reported Average price per 100 Kilograms:</div>
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>Rice Type</th>
                          <th>Avg Price</th>
                          <th>Report Price</th>
                        </tr>
                      </thead>
                      {
                        this.state.mill.rice_info && 
                      <tbody>
                        
                          { this.state.mill.rice_info.map((rice_type, rice_index) => 
                            <tr>
                            <td>{rice_type.name}</td> 
                            <td>THB{rice_type.avg}</td>
                            <td></td>
                            </tr>
                          )
                        }
                    </tbody>
                    }
                    </Table>

                  </Col>
                </Container>   
            </div>
        )
    }
}

export default withRouter(Home)