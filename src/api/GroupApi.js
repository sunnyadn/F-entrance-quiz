import axios from 'axios';

const URL = 'http://localhost:8080/groups';

export default class GroupApi {
  static getGroups() {
    return axios.get(URL);
  }
}
