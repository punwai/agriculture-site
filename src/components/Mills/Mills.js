import React, { Component } from 'react';
import { Nav, Navbar, Form, Spinner, FormControl, Dropdown, DropdownButton, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './Mills.scss';
import { db } from '../../firebase';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

class Mills extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            millsList: [],
            searchTerm: '',
            loading: true,
            province: null,
        };
    }

    editSearchTerm = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    dynamicSearch = () => {
        if(this.state.province) {
            return this.state.millsList.filter(mill => { 
                return mill.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) && mill.province == this.state.province.value
            })
        }else{
            return this.state.millsList.filter(mill => mill.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        }
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
                        avg += parseInt(val)
                        count += 1
                    }
                    avg = avg/count;
                    price_item.avg = avg;

                    var late = value.late;
                    if (late) {
                        var date = new Date(null);
                        date.setSeconds(late.seconds); // specify value for SECONDS here
                        price_item.late = date.toISOString().substr(0, 10);    
                    } else {
                        late = "NA"
                    }
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

    handleProvince= (e) => {
        console.log(e);
        this.setState({province: e});
      }
    
    options = [
        {value: "กรุงเทพมหานคร", label: 'กรุงเทพมหานคร' },
        {value:"กาฬสินธุ์", label: 'กาฬสินธุ์' },
        {value:"ขอนแก่น",label: 'ขอนแก่น' },
        {value:"ฉะเชิงเทรา",label: 'ฉะเชิงเทรา' },
        {value:  "หนองบัวลำภู",label: 'หนองบัวลำภู' },
        {value:"มหาสารคาม",label: 'มหาสารคาม' },
        {value:"มุกดาหาร",label: 'มุกดาหาร' },
        {value: "ยโสธร", label: 'ยโสธร' },,
        {value:"ร้อยเอ็ด",label: 'ร้อยเอ็ด' },
        {value: "ราชบุรี",label: 'ราชบุรี' },
        {value:"สุรินทร์",label: 'สุรินทร์' },
        {value:"อุดรธานี",label: 'อุดรธานี' },
        {value:"อุทัยธานี",label: 'อุทัยธานี' },
        {value:"อุตรดิตถ์",label: 'อุตรดิตถ์' },
        {value:"อุบลราชธานี",label: 'อุบลราชธานี' },
        {value:"อำนาจเจริญ",label: 'อำนาจเจริญ' },
      ]    


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
                                <FormControl type="text" onChange={this.editSearchTerm} placeholder="ค้นจากชื่อ" className="mr-sm-2 mb-2" />
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
                                <Select className="short"
                                placeholder="จังหวัด"
                                onChange={this.handleProvince}
                                options={this.options}
                                />
                            </span>
                        </div>        
                        <br></br>
                        <h2 className="subtitle" style={{ fontSize: "24px" }}>รายการที่พบเจอ <span style={{ color: "grey"}}>( {this.state.millsList.length} รายการ )</span> </h2>
                        <Row className="m-0">
                            <div className="divider"></div>
                            { this.dynamicSearch().map((item, index) =>
                                <div style={{width:"100%"}}>
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
                                                    <div>{rice_type.name}: THB{rice_type.avg} <span style={{color: "red"}}>(ล่าสุด: {rice_type.late})</span> </div>
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
                            <a href="/add_mill"><Button disabled={!this.props.user} variant="danger">เพิ่มข้อมูล</Button></a>
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