import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    students: [],
  };

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
      .then((data) =>
        this.setState({
          students: data,
        })
      );
  };

  render() {
    return (
      <div data-testid="app" className="App">
        <div>
          <h2>学员列表</h2>
          <div className="students">
            {this.state.students.map((student) => {
              return (
                <div key={student.id} className="student">
                  <p>{student.name}</p>
                </div>
              );
            })}
            <div className="student">
              <p>+ 添加学员</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
