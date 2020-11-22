import React, { Component } from 'react';
import { Nav, Modal, Navbar, Spinner, Form, Dropdown, DropdownButton, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './TimeShare.scss';
import { db } from '../../firebase';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Select from 'react-select'

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
            loading: true,
            brand: "",
            searchTerm: "",
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

    dynamicSearch = () => {
        if(this.state.brand && this.state.brand.value) {
            return this.state.itemsList.filter(item => { 
                return item.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) && item.brand == this.state.brand.value
            })
        }else{
            return this.state.itemsList.filter(item => item.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        }
    }

    addToCart = (index, e) => {
        this.props.dispatch({type: 'ADD_ITEM', item: this.state.itemsList[index]})
    }

    removeFromCart = (index, item) => {
        this.props.dispatch({type: 'REMOVE_ITEM', item: this.state.itemsList[index]})
    }

    options = [
        {value: null, label: '-' },
        {value: "Makita", label: 'MAKITA' },
        {value:"Polo", label: 'POLO' },
        {value:"Ebara",label: 'EBARA' },
        {value:"Franklin Electric",label: 'FRANKLIN ELECTRIC' },
      ]    

      handleProvince= (e) => {
        console.log(e);
        this.setState({brand: e});
      }

      editSearchTerm = (e) => {
        this.setState({searchTerm: e.target.value})
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

                        <h2 className="subtitle" style={{ fontSize: "24px" }}>CATALOGUE สินค้าไทม์แชร์ </h2>

                        <Row>
                            <Col xs={10} sm={11}>
                                <FormControl onChange={this.editSearchTerm} type="text" placeholder="ค้นหา" className="mr-sm-2 mb-2" />
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
</svg> คัดเลือก
: &nbsp; &nbsp;
                            <span>
                                <span>
                                <Select className="short"
                                placeholder="ยี่ห้อ"
                                onChange={this.handleProvince}
                                options={this.options}
                                />
                                </span>
                            </span>                  
                        </div>

                        <div className="divider"></div>
                        
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-tools" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M0 1l1-1 3.081 2.2a1 1 0 0 1 .419.815v.07a1 1 0 0 0 .293.708L10.5 9.5l.914-.305a1 1 0 0 1 1.023.242l3.356 3.356a1 1 0 0 1 0 1.414l-1.586 1.586a1 1 0 0 1-1.414 0l-3.356-3.356a1 1 0 0 1-.242-1.023L9.5 10.5 3.793 4.793a1 1 0 0 0-.707-.293h-.071a1 1 0 0 1-.814-.419L0 1zm11.354 9.646a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708-.708l-3-3z"/>
  <path fill-rule="evenodd" d="M15.898 2.223a3.003 3.003 0 0 1-3.679 3.674L5.878 12.15a3 3 0 1 1-2.027-2.027l6.252-6.341A3 3 0 0 1 13.778.1l-2.142 2.142L12 4l1.757.364 2.141-2.141zm-13.37 9.019L3.001 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/>
</svg> สินค้าทั้งหมดที่คัดกรอง <span style={{ color: "grey"}}>( {this.state.itemsList.length} รายการ )</span>
                        <Row className="m-0">
                            { this.dynamicSearch().map((item, index) =>
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
                                                    &nbsp;/  ไทม์แชร์
                                                    </span>
                                                    &nbsp;
                                                    <span style={{ fontSize: "12px"}} className="oldPrice">
                                                    ฿{ item.price_normal }
                                                    </span>
                                                </div>

                                                { this.props.basket.findIndex(el => el.item.id == item.id) == -1 ? 
                                                    <Button className="mr-1 mb-1 p-1" style={{ fontSize: "12px"}} variant="danger" onClick={this.addToCart.bind(this,index)}>
                                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart3 top-margin-minus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                                        </svg>
                                                        &nbsp;
                                                        เพิ่มลงตะกร้า
                                                    </Button> :
                                                    <Button className="mr-1 mb-1 p-1" style={{ fontSize: "12px"}} variant="warning" onClick={this.removeFromCart.bind(this,index)}>
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