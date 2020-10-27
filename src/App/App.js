import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {};

  componentDidMount = () => {
    this.getStudents();
  };

  getStudents = () => {
    const url = 'http://localhost:8080/students';
    fetch(url, {
      headers: {
        'content-type': 'application/json',
      },
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
  };

  render() {
    return (
      <div data-testid="app" className="App">
        <div>
          <h2>学员列表</h2>
        </div>
      </div>
    );
  }
}

export default App;
