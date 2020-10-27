import React from 'react';
import './GroupList.scss';
import Group from '../Group/Group';

export default class GroupList extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      groups: [
        [
          { id: 1, name: '成吉思汗' },
          { id: 2, name: '鲁班七号' },
          { id: 3, name: '太乙真人' },
        ],
        [
          { id: 4, name: '钟无艳' },
          { id: 5, name: '花木兰' },
          { id: 6, name: '雅典娜' },
        ],
        [
          { id: 7, name: '芈月' },
          { id: 8, name: '白起' },
          { id: 9, name: '刘禅' },
        ],
        [
          { id: 10, name: '庄周' },
          { id: 11, name: '马超' },
        ],
        [
          { id: 12, name: '刘备' },
          { id: 13, name: '哪吒' },
        ],
        [
          { id: 14, name: '大乔' },
          { id: 15, name: '蔡文姬' },
        ],
      ],
    };
  }

  render() {
    return (
      <section>
        <div className="group-head">
          <h1 className="title">分组列表</h1>
          <button className="group-button" type="button">
            分组学员
          </button>
        </div>
        {this.state.groups.map((group, index) => (
          <Group group={group} index={index} key={group[0].id} />
        ))}
      </section>
    );
  }
}
