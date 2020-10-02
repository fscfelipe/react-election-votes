import React, { Component } from 'react';
import './App.css';

export default class App extends Component {


  /**
   * Precisamos criar o estado da aplicação
   */

  constructor() {
    super();

    this.state = {
      candidates: []
    }
  }

  render() {
    return (
      <div className="App" >

      </div>
    );
  }
}
