import React, { Component } from 'react';
import Student from '../student/student';
import './group.css';

class Group extends Component {
  render() {
    const { group } = this.props;
    return (
      <div className="group">
        <p>{group.id} 组</p>
        <div>
          {group.students.map((student) => (
            <Student student={student} />
          ))}
        </div>
      </div>
    );
  }
}

export default Group;
