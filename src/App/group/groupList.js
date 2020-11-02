import React, { Component } from 'react';
import './group.css';

import { GET_GROUPS_URL } from '../service/service';
import Group from './group';

// TODO GTB-工程实践: + 有提取共用组件
class GroupList extends Component {
  // TODO GTB-工程实践: - 建议安装插件解决eslint而不是注释(已修改该问题)
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };
  }

  // TODO GTB-工程实践: - 命名不是很合适，获取分组列表(已修改该问题)
  getGroupOfStudent = () => {
    fetch(GET_GROUPS_URL, {
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

  render() {
    return (
      <div className="list-item">
        {/* TODO GTB-知识点： - 这里建议使用<header>标签 (修改为<header>标签) */}
        <header className="group-title">
          <h2>分组列表</h2>
          <button onClick={this.getGroupOfStudent} type="button">
            分组学员
          </button>
        </header>
        {this.state.groups &&
          this.state.groups.map((group) => <Group key={group.id} group={group} />)}
      </div>
    );
  }
}

export default GroupList;
