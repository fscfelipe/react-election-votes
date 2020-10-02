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

    this.interval = null;
  }

  /**
   * Iremos fazer uma conexão com o backend
   * que irá buscar os dados dos votos a cada 1 segundo.
   */
  componentDidMount() {
    this.interval = setInterval(() => {

      fetch('http://localhost:8080/votes')
        .then(res => {
          return res.json();
        }).then(json => {
          console.log(json);
        })

    }, 1000);
  }

  render() {
    return (
      <div className="App" >

      </div>
    );
  }
}
