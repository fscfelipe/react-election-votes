import React, { Component } from 'react';
import './App.css';
import Candidates from './components/Candidates';
import Header from './components/Header';
import Spinner from './components/Spinner';

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
          this.setState({
            candidates: json.candidates
          })
        })

    }, 1000);
  }

  render() {
    const { candidates } = this.state;

    if (candidates.length === 0) {
      return (
        <Spinner description="Carregando..." />
      )
    }

    return (
      <div>
        <Header title="Votação" />
        <Candidates candidates={candidates} />
      </div>
    )


  }
}
