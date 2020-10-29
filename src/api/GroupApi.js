import axios from 'axios';

const URL = 'http://localhost:8080/groups';

// TODO GTB-工程实践: - helper文件命名一般小写开头
export default class GroupApi {
  static getGroups() {
    return axios.get(URL);
  }

  static refreshGroups() {
    return axios.post(`${URL}/refresh`);
  }
}
