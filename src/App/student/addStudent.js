import React, { Component } from 'react';
import './student.css';

// TODO GTB-工程实践: + 有提取共用组件
class AddStudent extends Component {
  render() {
    const { addStudent, handelKeyUp, isAddStudent } = this.props;
    return (
      <div className="student add-student">
        {!isAddStudent ? (
          <button className="add-student-button" onClick={addStudent} type="button">
            + 添加学员
          </button>
        ) : (
          <input id="input-name" type="text" className="add-student-input" onKeyUp={handelKeyUp} />
        )}
      </div>
    );
  }
}

export default AddStudent;
