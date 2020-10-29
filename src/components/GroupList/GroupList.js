import React from 'react';
import './GroupList.scss';
import Group from '../Group/Group';
import GroupApi from '../../api/GroupApi';

export default class GroupList extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      groups: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await GroupApi.getGroups();
      // TODO GTB-知识点: - 建议data数据放在service去解析完再返回
      const groups = [...response.data];
      this.setState({ groups });
    } catch (e) {
      // Dismiss for now
    }
  }

  refreshGroups = async () => {
    try {
      const response = await GroupApi.refreshGroups();
      const groups = [...response.data];
      this.setState({ groups });
    } catch (e) {
      // Dismiss for now
    }
  };

  render() {
    return (
      <section>
        {/* TODO GTB-知识点: - 用header标签更符合语义 */}
        <div className="group-head">
          <h1 className="title">分组列表</h1>
          <button className="group-button" type="button" onClick={this.refreshGroups}>
            分组学员
          </button>
        </div>
        {this.state.groups.map((group, index) => (
          // TODO GTB-知识点: - 用group的第一个member的id做key值比较奇怪，如果member变了，那id也会更着变，同样会对遍历组件树有影响
          <Group group={group} index={index} key={group.members[0].id} />
        ))}
      </section>
    );
  }
}
