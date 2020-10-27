import React from 'react';
import './Member.scss';

export default function Member(props) {
  const { id, name } = props.member;
  return <div className="member" key={id}>{`${id}. ${name}`}</div>;
}
