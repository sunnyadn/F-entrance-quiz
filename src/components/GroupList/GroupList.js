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
      const groups = [...response.data];
      this.setState({ groups });
    } catch (e) {
      // Dismiss for now
    }
  }

  render() {
    return (
      <section>
        <div className="group-head">
          <h1 className="title">分组列表</h1>
          <button className="group-button" type="button">
            分组学员
          </button>
        </div>
        {this.state.groups.map((group, index) => (
          <Group group={group} index={index} key={group[0].id} />
        ))}
      </section>
    );
  }
}
