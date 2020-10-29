import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './style/reboot.scss';
// TODO GTB-知识点: - 如果是为了添加async/await支持的话，建议采用babel plugin
import 'regenerator-runtime/runtime';

// TODO GTB-工程实践: + 小步提交，而且提交信息很表意
// TODO GTB-工程实践: + 工程结构划分清晰合理，代码结构很清晰
// TODO GTB-工程实践: + 组件划分合理，有考虑组件复用
// TODO GTB-知识点: * 语义化标签的使用需要加强
// TODO GTB-知识点: * flex语法掌握的比较好
// TODO GTB-完成度: * 完成度很高
ReactDOM.render(<App />, document.getElementById('root'));
