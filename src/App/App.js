import React, { Component } from 'react';
import './App.scss';
import Group from './group/group';

import Student from './student/student';

class App extends Component {
  // TODO GTB-工程实践: - 建议安装插件解决eslint而不是注释
  // eslint-disable-next-line react/state-in-constructor
  state = {
    students: [],
    groups: [],
    isAddStudent: false,
  };

  componentDidMount = () => {
    this.showStudents();
  };

  // TODO GTB-工程实践: - 命名不是很合适，获取学员列表
  showStudents = () => {
    // TODO GTB-工程实践: - 建议将URL提取常量
    // TODO GTB-工程实践: - 建议将获取数据api抽取到单独的service
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

  // TODO GTB-工程实践: - 命名不是很合适，获取分组列表
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

  // TODO GTB-工程实践: - 命名不是很合适
  handleAddStudent = () => {
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
    const url = `http://localhost:8080/student?name=${studentName}`;
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
          {/* TODO GTB-知识点： - 这里建议使用<header>标签 (修改为<header>标签) */}
          <header className="group-title">
            <h2>分组列表</h2>
            <button onClick={this.handleGroupStudent} type="button">
              分组学员
            </button>
          </header>
          {this.state.groups &&
            this.state.groups.map((group) => <Group key={group.id} group={group} />)}
        </div>
        <div className="list-item">
          <h2>学员列表</h2>
          <div className="students">
            {this.state.students.map((student) => {
              return <Student key={student.id} student={student} />;
            })}
            {/* TODO GTB-知识点：- css 命名不太合理，添加学员这块建议可以提取一个单独的组件 */}
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
// TODO GTB-工程实践: * 有组件划分，但是划分层级不够，学员列表和分组列表明显可以划分成两个组件，然后在内部可以继续划分；
// TODO GTB-工程实践: * 本次需求students和group之间没有交互，数据相互独立，建议将数据封装到各自的组件中，不用提升到最外层
// 组件划分建议如下：
// App
//   -GroupList
//      -GroupItem
//          -StudentItem
//   -StudentList
//      -StudentItem

// TODO GTB-工程实践: + 有小步提交，提交信息符合语义
