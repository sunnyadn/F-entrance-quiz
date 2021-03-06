import React from 'react';
import './MemberList.scss';
import MemberApi from '../../api/MemberApi';
import Member from '../Member/Member';
import NewMemberInput from '../NewMemberInput/NewMemberInput';

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

  addMember = async (name) => {
    try {
      const response = await MemberApi.addMember(name);
      const members = [...response.data];
      this.setState({ members });
    } catch (e) {
      // Dismiss for now
    }
  };

  render() {
    return (
      <section>
        <h1>学员列表</h1>
        <section className="members">
          {this.state.members.map((member) => (
            <Member member={member} key={member.id} />
          ))}
          <NewMemberInput addMember={this.addMember} />
        </section>
      </section>
    );
  }
}
