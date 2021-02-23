import React, { Component } from 'react'
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/NavBar.js'
import { NavBar } from './components/NavBar.js';
import { Header } from './components/Header.js';
import CardComponent from './components/CardComponent.js';

class App extends Component {
  render(){
    return (
      <div className="App">
        <NavBar />
        <Header />
        <CardComponent />
      </div>
    )
  }
}

export default App;
