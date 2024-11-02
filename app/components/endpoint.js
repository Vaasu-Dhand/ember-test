import Component from '@glimmer/component';
import { action } from '@ember/object';
import fetch from 'fetch';

export default class Endpoint extends Component {
  constructor(...args) {
    super(...args);
    this.endpoint = '';
  }

  // @action
  // async handleClick(endpoint) {
  //   console.log(endpoint);
  //   const URL = `https://jsonplaceholder.typicode.com${endpoint}`;
  //   console.log(URL);
  //   const data = await fetch(URL).then((res) => res.json());
  //   console.log(data);
  // }
}
