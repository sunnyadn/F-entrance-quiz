import axios from 'axios';

const URL = 'http://localhost:8080/members';

export default class MemberApi {
  static getMembers() {
    return axios.get(URL);
  }
}
