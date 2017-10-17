import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    seregaStatus: 'ne pidor',
    login: '',
    password: '',
  }

  onClick = () => {
    const {login, password} = this.state;
    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({login, password}),
    };

    fetch('http://localhost:8080/authorization', request)
      .then(resolve => resolve.json())
      .then(data =>
        console.log(data.login + data.password)
      );
  }

  updateLoginValue = (e) => {
    this.setState({
      login: e.target.value,
    });
  }

  updatePasswordValue = (e) => {
    this.setState({
      password: e.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{`Login: ${this.state.login} Password: ${this.state.password}`}</h1>
        </header>
        <h1>Authorization</h1>
        <div className="loginForm">
          <input value={this.state.login} onChange={this.updateLoginValue}/>
          <input value={this.state.password} onChange={this.updatePasswordValue}/>
          <button className="loginButton" onClick={this.onClick}>Login</button>
        </div>
      </div>
    );
  }
}

export default App;
