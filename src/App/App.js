import React, { Component } from 'react';
import './App.scss';
import Group from './group/group';

import Student from './student/student';

class App extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    students: [],
    groups: [],
    isAddStudent: false,
    studentName: '',
  };

  componentDidMount = () => {
    this.showStudents();
  };

  showStudents = () => {
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

  handleGroupStudent = () => {
    const url = 'http://localhost:8080/groups';
    fetch(url, {
      headers: {
        'content-type': 'application/json',
      },
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          groups: data,
        });
      });
  };

  handleAddStudent = () => {
    this.setState({
      isAddStudent: true,
    });
  };

  handleChange = (tag, event) => {
    this.setState({
      [tag]: event.target.value,
    });
  };

  handelKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.httpAddStudent();
      this.setState({
        isAddStudent: false,
      });
    }
  };

  httpAddStudent = () => {
    const url = `http://localhost:8080/student?name=${this.state.studentName}`;
    fetch(url, {
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
    }).then(() => {
      this.showStudents();
    });
  };

  render() {
    return (
      <div data-testid="app" className="App">
        <div className="list-item">
          <div className="group-title">
            <h2>分组列表</h2>
            <button onClick={this.handleGroupStudent} type="button">
              分组学员
            </button>
          </div>
          {this.state.groups &&
            this.state.groups.map((group) => <Group key={group.id} group={group} />)}
        </div>
        <div className="list-item">
          <h2>学员列表</h2>
          <div className="students">
            {this.state.students.map((student) => {
              return <Student key={student.id} student={student} />;
            })}
            <div className="student">
              {!this.state.isAddStudent ? (
                <button className="add-student" onClick={this.handleAddStudent} type="button">
                  + 添加学员
                </button>
              ) : (
                <input
                  id="input-name"
                  type="text"
                  className="add-student-input"
                  value={this.state.studentName}
                  onKeyUp={this.handelKeyUp}
                  onChange={(e) => this.handleChange('studentName', e)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
