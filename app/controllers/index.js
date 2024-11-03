import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @service store;
  @service loader;
  @tracked posts = [];
  @tracked comments = [];

  get myData() {
    console.log(this);
    return `Comes from controller: ${this.model}`; // This will be the data returned from the model hook
  }

  reset() {
    this.posts = [];
    this.comments = [];
  }

  @action
  async handleOnClick(endpoint) {
    this.loader.setIsLoading(true);

    this.reset();

    console.log('endpoint', endpoint);
    switch (endpoint) {
      case '/posts':
        this.posts = await this.store.findAll('post');
        break;
      case 'comments':
        break;
      default:
        return;
    }

    this.loader.setIsLoading(false);
  }
}
