import React, { Component } from 'react';
import './student.css';

class Student extends Component {
  render() {
    const { student } = this.props;
    return (
      <div className="student">
        <p>{`${student.id}. ${student.name}`}</p>
      </div>
    );
  }
}

export default Student;
