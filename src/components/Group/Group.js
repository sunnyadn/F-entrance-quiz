import React from 'react';
import Member from '../Member/Member';
import './Group.scss';

export default function Group(props) {
  return (
    <div className="group">
      <h2 className="group-title">{props.index + 1} 组</h2>
      <div>
        {props.group.map((member) => (
          <Member member={member} />
        ))}
      </div>
    </div>
  );
}
