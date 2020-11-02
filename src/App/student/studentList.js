import React, { Component } from 'react';
import './student.css';

import Student from './student';
import AddStudent from './addStudent';
import { GET_STUDENTS_URL, POST_STUDENT_URL } from '../service/service';

// TODO GTB-工程实践: + 有提取共用组件
class StudentList extends Component {
  // TODO GTB-工程实践: - 建议安装插件解决eslint而不是注释(已修改该问题)
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      isAddStudent: false,
    };
  }

  componentDidMount = () => {
    this.getAllStudents();
  };

  // TODO GTB-工程实践: - 命名不是很合适，获取学员列表(已修改该问题)
  getAllStudents = () => {
    // TODO GTB-工程实践: - 建议将URL提取常量(已修改该问题)
    // TODO GTB-工程实践: - 建议将获取数据api抽取到单独的service(已修改该问题)
    fetch(GET_STUDENTS_URL, {
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

  // TODO GTB-工程实践: - 命名不是很合适(已修改该问题)
  addStudent = () => {
    this.setState({
      isAddStudent: true,
    });
  };

  handelKeyUp = (event) => {
    if (event.keyCode === 13) {
      this.httpAddStudent(event.target.value);
      this.setState({
        isAddStudent: false,
      });
    }
  };

  // TODO GTB-知识点: * 这里可以省略studentName，也可以省略掉onChang，直接keyup的时候用event.target.value就好了(已经修改此处内容)
  httpAddStudent = (studentName) => {
    const url = `${POST_STUDENT_URL}?name=${studentName}`;
    fetch(url, {
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
    }).then(() => {
      this.getAllStudents();
    });
  };

  render() {
    return (
      <div className="list-item">
        <h2>学员列表</h2>
        <div className="students">
          {this.state.students.map((student) => {
            return <Student key={student.id} student={student} />;
          })}
          {/* TODO GTB-知识点：- css 命名不太合理，添加学员这块建议可以提取一个单独的组件(已修改该问题) */}
          <AddStudent
            isAddStudent={this.state.isAddStudent}
            addStudent={this.addStudent}
            handelKeyUp={this.handelKeyUp}
          />
        </div>
      </div>
    );
  }
}

export default StudentList;
