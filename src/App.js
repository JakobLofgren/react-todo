import React, { Component } from 'react';
import './App.css';

import Header from "./Header"
import ToDoList from "./ToDoList"
import Footer from "./Footer"

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div id="app">
          <Header />
          <ToDoList />
          <Footer />
        </div>
      </div>
    );
  }
}