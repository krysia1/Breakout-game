import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../css/App.css";
import Page from './components/page'

class App extends Component{
  render(){
    return(
      <Page />
    );
  }
}

export default hot(module)(App);