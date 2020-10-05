import React, { Component } from 'react';
import { Nav, Navbar, Form, Spinner, FormControl, Dropdown, DropdownButton, Button, Container, Row, Col, Card } from 'react-bootstrap';
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
				mills.push({
                    id: doc.id,
                    address: doc.data().address,
                    name: doc.data().name,
                    phone: doc.data().phone,
                    line_id: doc.data().line_id,
                    province: doc.data().province,
                    rice_info: rice_prices
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
                    <Container className="ts-container">


                        <h2 className="subtitle" style={{ fontSize: "24px" }}>เมนูรวมราคาโรงสี </h2>

                        <Row>
                            <Col xs={10} sm={11}>
                                <FormControl type="text" placeholder="ค้นจากรูป" className="mr-sm-2 mb-2" />
                            </Col>
                            <Col xs={2} sm={1} className="pl-0 m-0 searchwrap">
                                <Button variant="outline-success" className="search-btn"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                                </svg>
                                </Button>
                            </Col>
                        </Row>

                        <div className='p-3 filterBox'>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-funnel" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                            </svg> คัดเลือก: &nbsp; &nbsp;
                            <span>
                                <DropdownButton className="sortDrop" id="dropdown-item-button" title="ราคา">
                                <Dropdown.Item as="button">ราคา: สูงสุดถึงต่ำสุด</Dropdown.Item>
                                <Dropdown.Item as="button">ราคา: ต่ำสุดถึงสูงสุด</Dropdown.Item>
                                </DropdownButton>
                                &nbsp;&nbsp;
                                <DropdownButton className="sortDrop" id="dropdown-item-button" title="ยี่ห้อ">
                                <Dropdown.Item as="makit">MAKITA</Dropdown.Item>
                                <Dropdown.Item as="button">POLO</Dropdown.Item>
                                <Dropdown.Item as="button">EBARA</Dropdown.Item>
                                <Dropdown.Item as="button">FRANKLIN ELECTRIC</Dropdown.Item>
                                </DropdownButton>
                            </span>                  
                        </div>        
                        <br></br>
                        <h2 className="subtitle" style={{ fontSize: "24px" }}>รายการที่พบเจอ <span style={{ color: "grey"}}>( {this.state.millsList.length} รายการ )</span> </h2>
                        <Row className="m-0">
                            <div className="divider"></div>
                            { this.state.millsList.map((item, index) =>
                                <div>
                                    <Col xs={12} className="expand-hover border-round">
                                        <Row>
                                            <Col xs={6} sm={4} md={4} lg={4}>
                                                <img width="100%" src={require("./no-image-available.jpg")} />
                                            </Col>
                                            <Col>
                                                <div style={{ fontSize: "20px", fontWeight: '550' }}>
                                                    { item.name }
                                                </div>
                                                <div style={{ fontSize: "14px"}}>
                                                    { item.address }
                                                </div>
                                                {/* <div style={{ fontSize: "15px"}}>
                                                    Average Buy Price: { item.avg_price } 
                                                </div> */}
                                                <div className="pt-2">Reported Average price per 100 Kilograms:</div>
                                                { item.rice_info.map((rice_type, rice_index) => 
                                                    <div>{rice_type.name}: THB{rice_type.avg} </div>
                                                )
                                                }
                                                <a href={"/mill/" + item.id}> More Info </a>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <div className="divider"></div>
                                </div>
                                )
                            }
                        </Row>
                        มีข้อมูลใหม่? ถ้าหากคุณไม่สามารถค้นหาโรงสีที่ว่านั้นโปรดเติมข้อมูลเพื่อผลประโยชของสังคมคนเกี่ยวข้าว &nbsp;
                        <div>
                            <a href="/add_mill"><Button variant="danger">เพิ่มข้อมูล</Button></a>
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