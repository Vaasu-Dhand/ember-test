import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProfileSwitcher extends Component {
  @tracked user;

  constructor(owner, args) {
    super(owner, args);

    // Load active user from localStorage
    const userFromLocalStorage = localStorage.getItem('user');
    this.user = userFromLocalStorage
      ? JSON.parse(userFromLocalStorage)
      : this.args.users;
  }

  @action
  onChange(user) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user.serialize()));
  }
}
