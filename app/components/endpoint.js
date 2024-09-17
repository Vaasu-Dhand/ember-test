import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class Message extends Component {
  constructor(...args) {
    super(...args);
    this.endpoint = '';
  }

  @action
  handleClick() {}
}
