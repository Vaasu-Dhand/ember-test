import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @service store;
  @tracked posts = [];

  get myData() {
    console.log(this);
    return `Comes from controller: ${this.model}`; // This will be the data returned from the model hook
  }

  @action
  async handleOnClick(endpoint) {
    console.log('endpoint', endpoint);
    switch (endpoint) {
      case '/posts':
        this.posts = await this.store.findAll('posts');
        console.log(this.posts);

        break;
      case 'comments':
        // this.transitionToRoute('comments');
        break;
      default:
        return;
    }
  }
}
