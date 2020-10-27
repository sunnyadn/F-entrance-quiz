import React from 'react';
import './MemberList.scss';
import MemberApi from '../../api/MemberApi';
import Member from '../Member/Member';

export default class MemberList extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      members: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await MemberApi.getMembers();
      const members = [...response.data];
      this.setState({ members });
    } catch (e) {
      // Dismiss for now
    }
  }

  render() {
    return (
      <section>
        <h1>学员列表</h1>
        <section className="members">
          {this.state.members.map((member) => (
            <Member member={member} />
          ))}
          <button className="add-member-button" type="button">
            + 添加学员
          </button>
        </section>
      </section>
    );
  }
}
