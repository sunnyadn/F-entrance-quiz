import React from 'react';
import './NewMemberInput.scss';

export default class NewMemberInput extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      focused: false,
    };

    this.name = '';
  }

  switchToInput = () => {
    this.setState({ focused: true }, () => {
      this.nameInput.focus();
    });
  };

  inputKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.props.addMember(this.name);
      this.setState({ focused: false });
    }
  };

  nameChanged = (event) => {
    this.name = event.target.value;
  };

  render() {
    return this.state.focused ? (
      <div>
        <input
          className="new-member-input"
          ref={(input) => {
            this.nameInput = input;
          }}
          onChange={this.nameChanged}
          onKeyDown={this.inputKeyDown}
        />
      </div>
    ) : (
      <button className="new-member-button" type="button" onClick={this.switchToInput}>
        + 添加学员
      </button>
    );
  }
}
