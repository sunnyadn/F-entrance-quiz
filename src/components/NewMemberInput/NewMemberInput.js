import React from 'react';
import './NewMemberInput.scss';

export default class NewMemberInput extends React.PureComponent {
  render() {
    return (
      <button className="add-member-button" type="button">
        + 添加学员
      </button>
    );
  }
}
