import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ProfileSwitcher extends Component {
  constructor(owner, args) {
    super(owner, args);
    console.log(this.args.users);
  }

  @tracked user;
}
