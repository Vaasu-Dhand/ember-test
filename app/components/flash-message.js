// app/components/flash-message.js
import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class FlashMessage extends Component {
  @action
  close() {
    this.args.flash.destroyMessage();
  }
}
