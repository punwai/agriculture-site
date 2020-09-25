import React, { Component, FC, useState, useEffect, useCallback, useRouteMatch } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Container, } from 'react-bootstrap';
import Home from './components/Home/Home';
import About from './components/About/About';
import Model from './components/Model/Model';
import Login from './components/Login/Login';
import Basket from './components/Basket/Basket';
import ItemPage from './components/ItemPage/ItemPage';
import Mills from './components/Mills/Mills';
import TimeShare from './components/TimeShare/TimeShare';
import Partners from './components/Partners/Partners';
import Order from './components/Order/Order';
import Contact from './components/Contact/Contact';
import SecretAdmin from './components/SecretAdmin/SecretAdmin';
import { auth, db } from 'firebase'
import UserProvider from "./providers/UserProvider";
import { UserContext } from "./providers/UserProvider";

import RailinkLogo from './static/RaiLink.svg';
import LoginCallback from './components/LoginCallback/LoginCallback';
import { CookiesProvider } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        show: false,
        show2: false
      };
  }

  showDropdown = (e)=>{
    this.setState({ show: true });
  }
  hideDropdown = e => {
      this.setState({ show: false });
  }
  showDropdown2 = (e)=>{
    this.setState({ show2: true });
  }
  hideDropdown2 = e => {
      this.setState({ show2: false });
  }

  
  componentDidMount() {
  }

  static contextType = UserContext;

  signOut() {
    auth().signOut().then(function() {
      console.log("success!")
      window.location = '../';
    }).catch(function(error) {
      console.log("fail!")
    });
  }

  render() {
    console.log(this.props)
    return (
      <body>
        <Router>
          <UserProvider/>
          <div>
                <Navbar fill className="custom-navbar" variant="light" expand="lg">
                  <Container>
                  <Navbar.Brand href="/home"><img src={RailinkLogo} alt="React Logo" height="60"/></Navbar.Brand>
                  <Navbar.Toggle style={{border: "none"}} aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav fill className="mr-auto">
                      <Nav.Link href="/">หน้าหลัก</Nav.Link>
                      <NavDropdown title="เกี่ยวกับ" className="nav-dropdown" show={this.state.show} onMouseEnter={this.showDropdown} onMouseLeave={this.hideDropdown}>
                        <NavDropdown.Item href="/fromthefounder">จากใจของทีม</NavDropdown.Item>
                        <NavDropdown.Item href="/model">แผนการ</NavDropdown.Item>
                        <NavDropdown.Item href="/partners">ร่วมงาน</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/contact">ติดต่อ</NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="นโยบาย" className="nav-dropdown" show={this.state.show2} onMouseEnter={this.showDropdown2} onMouseLeave={this.hideDropdown2}>
                        <NavDropdown.Item href="/fromthefounder">FAQ คำถามที่พบบ่อย</NavDropdown.Item>
                        <NavDropdown.Item href="/model">นโยบายคืนเงิน</NavDropdown.Item>
                        <NavDropdown.Item href="/partners">นโยบายสั่งของ</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/contact">ติดต่อ</NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="/features">ข่าวสาร</Nav.Link>
                      <Nav.Link href="/timeshare">ไทม์แชร์</Nav.Link>
                      <Nav.Link href="/mills">ราคาข้าว</Nav.Link>
                    </Nav>
                    <Nav fill className="ml-auto">
                      <Nav.Link href="/basket"><Button variant="success">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart-fill top-margin-minus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>&nbsp;ตะกร้า ({this.props.basket.length})</Button>
                      </Nav.Link>
                      { this.props.user == null ? 
                        <Nav.Link href="/login">
                          <Button variant="secondary">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-person top-margin-minus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4z"/>
                              <path d="M13.784 14c-.497-1.27-1.988-3-5.784-3s-5.287 1.73-5.784 3h11.568z"/>
                              <path fill-rule="evenodd" d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg> &nbsp;
                            เข้าสู่ระบบ
                          </Button>
                        </Nav.Link>
                         : <Nav.Link><Button variant="danger" onClick={this.signOut}>
                         <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-person top-margin-minus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4z"/>
                           <path d="M13.784 14c-.497-1.27-1.988-3-5.784-3s-5.287 1.73-5.784 3h11.568z"/>
                           <path fill-rule="evenodd" d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                         </svg> &nbsp;
                         ออกจากระบบ
                       </Button></Nav.Link>
                      }
                      </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>   

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/fromthefounder">
                  <About/>
                </Route>
                <Route path="/model">
                  <Model/>
                </Route>
                <Route path="/order/:id">
                  <Order/>
                </Route>
                <Route path="/timeshare">
                  <TimeShare/>
                </Route>
                <Route path="/partners">
                  <Partners/>
                </Route>
                <Route path="/contact">
                  <Contact/>
                </Route>
                <Route path="/blog">
                  <Partners/>
                </Route>
                <Route path="/item/:id">
                  <ItemPage/>
                </Route>
                <Route path="/login">
                  <Login/>
                </Route>
                <Route path="/basket">
                  <Basket/>
                </Route>
                <Route path="/secretadmin">
                  <SecretAdmin/>
                </Route>
                <Route path="/mills">
                  <Mills/>
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
          </div>
        </Router>

        <footer class="container-fluid bg-grey py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="row">
                  <div class="col-md-6 ">
                    <div class="logo-part">
                        <img src={require("./static/RaiLink.svg")} class="w-50 logo-footer"/>
                        <p>We promote sustainable, incremental developments to the agricultural sector
                          especially in the areas of commerce and automation technologies. <br/><br/>
                          - Khaw Donsawat, Founding member
                        </p>
                        <p>© 2019 by The RaiLink Initiative </p>
                    </div>
                  </div>
                  <div class="col-md-6 px-4">
                    <h6>Ordering, Service or Maintenance Issues?</h6>
                    <p>Please note that contact through our LINE OFFICIAL ACCOUNT will be the fastest</p>
                    <p><span className="bold-span">Email:</span> railink@gmail.com</p>
                    <p><span className="bold-span">Phone:</span> 02-867-1215</p>
                    <p><span className="bold-span">LINE:</span> @railink</p>
                    <a href="#" class="btn-footer"> Contact Us</a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="row">
                    <div class="col-md-6 px-4">
                      <div class="row ">
                          <div class="col-md-6">
                            <ul>
                                <li> <a href="/"> Home</a> </li>
                                <li> <a href="/fromthefounder"> About</a> </li>
                                <li> <a href="/model"> Strategic Aims</a> </li>
                                <li> <a href="/service"> Services</a> </li>
                                <li> <a href="/fromthefounder"> Team</a> </li>
                                <li> <a href="#"> Contact</a> </li>
                            </ul>
                          </div>
                          <div class="col-md-6 px-4">
                            <ul>
                                <li> <a href="/timeshare"> Timeshare</a> </li>
                                <li> <a href="/mills"> Rice price</a> </li>
                                <li> <a href="#"> Policy</a> </li>
                                <li> <a href="#"> Refunds</a> </li>
                            </ul>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </footer>


          <script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js"></script>
          <script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-analytics.js"></script>
          <script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-auth.js"></script>
          <script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-firestore.js"></script>
      </body>
    );
  }
}

function mapStateToProps(state) {
  return { basket: state.basket, user: state.user }
}

export default connect(mapStateToProps)(App);
