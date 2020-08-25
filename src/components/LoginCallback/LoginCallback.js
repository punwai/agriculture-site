import React, { Component, FC, useState, useEffect, useCallback } from 'react';
import { Nav, Navbar, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';
import qs from 'qs'
import Cookies from 'universal-cookie';
var jwt = require('jsonwebtoken');

class LoginCallback extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }

    addToken(token) {
        const cookies = new Cookies();
        cookies.set('token', token, { path: '/' });
    }

    componentDidMount() {
        console.log(this.props)
        let params = queryString.parse(this.props.location.search)
        console.log(params)
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        const body = {
            grant_type: `authorization_code`,
            code: `${params.code}`,
            redirect_uri:`http://localhost:3000/callback`,
            client_id:`1654689120`,
            client_secret:`de94f1ab3f97c5e4e7e9926dd67e0e9b`,
        };
        axios.post(`https://api.line.me/oauth2/v2.1/token`, qs.stringify(body), config)
          .then(res => {
              console.log(res)
              var decoded_id_token = jwt.verify(res.data.id_token,
                `de94f1ab3f97c5e4e7e9926dd67e0e9b`, {
                audience: `1654689120`, 
                issuer:'https://access.line.me',
                algorithms:['HS256'] },
                (err, decoded) => {
                    if(!err){
                        console.log(decoded)
                        this.addToken(decoded)
                        const bearerconfig = {
                            headers: {
                                'Authorization': `Bearer ${res.data.access_token}`
                            }
                        }
                        axios.get(`https://api.line.me/v2/profile`, bearerconfig).then(res => {
                            console.log(res)
                        })
                    }
                }
            )
            })
          .catch(console.error);
        }

    render() {
        return(<div></div>)
    }
}

export default withRouter(LoginCallback);