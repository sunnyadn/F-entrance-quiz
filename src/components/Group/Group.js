import React from 'react';
import Member from '../Member/Member';
import './Group.scss';

export default function Group(props) {
  const { group, index } = props;

  return (
    <div className="group">
      <h2 className="group-title">{index + 1} 组</h2>
      <div className="group-members">
        {group.members.map((member) => (
          <Member member={member} key={member.id} />
        ))}
      </div>
    </div>
  );
}
