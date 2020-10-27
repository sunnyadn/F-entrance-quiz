import React from 'react';
import './GroupList.scss';

export default class GroupList extends React.PureComponent {
  render() {
    return (
      <section>
        <div className="title">
          <h1>分组列表</h1>
          <button className="group-button" type="button">
            分组学员
          </button>
        </div>
      </section>
    );
  }
}
