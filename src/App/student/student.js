import React, { Component } from 'react';
import './student.css';

// TODO GTB-工程实践: + 有提取共用组件
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
