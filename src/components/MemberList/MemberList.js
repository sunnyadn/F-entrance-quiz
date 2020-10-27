import React from 'react';
import './MemberList.scss';
import axios from 'axios';

export default class MemberList extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      members: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get('http://localhost:8080/members');
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
            <div className="member" key={member.id}>{`${member.id}. ${member.name}`}</div>
          ))}
        </section>
      </section>
    );
  }
}
