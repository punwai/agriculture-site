import React, { Component, FC, useState, useEffect, useCallback, useRouteMatch } from 'react';
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Nav, Navbar, Form, FormControl, Button, Container, } from 'react-bootstrap';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Basket from './components/Basket/Basket';
import TimeShare from './components/TimeShare/TimeShare';
import Order from './components/Order/Order';

import LoginCallback from './components/LoginCallback/LoginCallback';
import { CookiesProvider } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { connect } from 'react-redux';
import { getAllItems } from './items';
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
      };
  }
  
  componentDidMount() {
  }
  
  render() {
    return (
      <body>
        <Router>
          <div>
              <Container>
                <Navbar fill className="custom-navbar" variant="light">
                  <Navbar.Brand href="/home">ShareDi</Navbar.Brand>
                  <Nav fill className="mr-auto">
                    <Nav.Link href="/about"><b>เกี่ยวกับ</b></Nav.Link>
                    <Nav.Link href="/features">ข่าวสาร</Nav.Link>
                    <Nav.Link href="/partner">ร่วมงาน</Nav.Link>
                    <Nav.Link href="/timeshare">ไทม์แชร์</Nav.Link>
                  </Nav>
                  <Nav>

                  <Nav.Link href="/basket"><Button variant="outline-success">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart-fill top-margin-minus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>&nbsp;ตะกร้า</Button>
                  </Nav.Link>

                  <Nav.Link href="/login">
                    <Button variant="outline-secondary">
                      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-person top-margin-minus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4z"/>
                        <path d="M13.784 14c-.497-1.27-1.988-3-5.784-3s-5.287 1.73-5.784 3h11.568z"/>
                        <path fill-rule="evenodd" d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                      </svg> &nbsp;
                      <b>เข้าสู่ระบบ</b>
                    </Button>
                  </Nav.Link>

                  </Nav>
                </Navbar>   
              </Container>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Container>
              <Switch>
                <Route path="/about">
                </Route>
                <Route path="/order/:id">
                  <Order/>
                </Route>
                <Route path="/timeshare">
                  <TimeShare/>
                </Route>
                <Route path="/login">
                  <Login/>
                </Route>
                <Route path="/callback">
                  <LoginCallback/>
                </Route>
                <Route path="/basket">
                  <Basket/>
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Container>
          </div>
        </Router>
          <script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js"></script>
          <script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-analytics.js"></script>
          <script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-auth.js"></script>
          <script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-firestore.js"></script>
      </body>
    );
  }
}

function mapStateToProps(state) {
  return { basket: state.basket }
}

export default connect(mapStateToProps)(App);
