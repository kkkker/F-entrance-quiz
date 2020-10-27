import React, { Component } from 'react';
import Student from '../student/student';
import './group.css';

class Group extends Component {
  render() {
    const { group } = this.props;
    return (
      <div className="group">
        <p className="group-name">{group.id} 组</p>
        <div className="group-student">
          {group.students.map((student) => (
            <Student key={student.id} student={student} />
          ))}
        </div>
      </div>
    );
  }
}

export default Group;
