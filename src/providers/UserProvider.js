import React, { Component, createContext, useState } from "react";
import { auth } from "../firebase";

export const UserContext = createContext({ user: "huy" });

class UserProvider extends React.Component {

  state = {
    user: "hey"
  };

  componentDidMount = () => {
    var userAuth = auth().currentUser;
    auth().onAuthStateChanged((userAuth) => {
      // this.setState({ user: userAuth });
      // console.log(userAuth)
    });
  };

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;
