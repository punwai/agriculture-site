import React, { Component, createContext, useState } from "react";
import { auth } from "../firebase";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

export const UserContext = createContext({ user: "huy" });

class UserProvider extends React.Component {

  componentDidMount = () => {
    var userAuth = auth().currentUser;
    this.props.dispatch({type: 'SET_USER', user: userAuth})
    auth().onAuthStateChanged((userAuth) => {
      console.log(userAuth)
      this.props.dispatch({type: 'SET_USER', user: userAuth})
      // console.log(userAuth)
    });
  };

  render() {
    return (
      <div></div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user }
}

export default connect(mapStateToProps)(withRouter(UserProvider));
