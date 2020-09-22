import React, { Component, FC, useState, useEffect, useCallback } from 'react';
import { Nav, Navbar, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './Login.scss';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { signInWithGoogle } from '../../firebase'
import { UserContext } from '../../providers/UserProvider'

export default class Home extends Component {
  
  static contextType = UserContext;

    handleGoogleLogin = () => {

        const qParams = [
          `scope=profile%20openid`,
          `response_type=code`,
          `client_id=1654689120`,
          `state=12345abcde`,
          `nonce=09876xyz`,
          `redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback`,
        ].join("&");
        try {
          window.location.assign(`https://access.line.me/oauth2/v2.1/authorize?${qParams}`);
        } catch (e) {
          console.error(e);
        }
        
    };

    googleLogin(){
      signInWithGoogle()
      window.location.assign('/timeshare');
    }
    
    render() {
        return (
            <div>
                <div className="home-container">
                  <img class="secondsvg" src={require("../interim.svg")} alt="Kiwi standing on oval"/>
                </div>
                <Container className="shadow login-container text-center">
                  <Col className="bannerText text-center">
                      เข้าสู่ระบบ
                  </Col>
                  <Col>Join Us Now. By making an account, you will be able to time-share equipments at low prices, for the exact times you need! Increase productivity, save your time, grow your farm!</Col>
                  <Col>
                    <br/>
                    <Button onClick={this.googleLogin}
                      className="">
                      Sign in with Google
                    </Button>
                  </Col>
                </Container>   
            </div>
        )
    }
}

