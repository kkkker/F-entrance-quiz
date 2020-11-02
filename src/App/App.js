import React, { Component } from 'react';
import './App.scss';

import StudentList from './student/studentList';
import GroupList from './group/groupList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <GroupList />
        <StudentList />
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
// (已修改该内容)

// TODO GTB-工程实践: + 有小步提交，提交信息符合语义
