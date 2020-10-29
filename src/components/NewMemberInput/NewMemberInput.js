import React from 'react';
import './NewMemberInput.scss';

export default class NewMemberInput extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      // TODO GTB-工程实践: - 命名为isEditing应该更符合功能
      focused: false,
    };

    // TODO GTB-知识点: - 不需要存储name
    this.name = '';
  }

  // TODO GTB-工程实践: - switchToInput命名也不太合理，尽量命名应该更贴合业务或功能
  switchToInput = () => {
    this.setState({ focused: true }, () => {
      // TODO GTB-知识点: - 不建议用focus方法，可以用autofocus属性
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
