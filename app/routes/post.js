import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostRoute extends Route {
  @service store;

  model() {
    const activeUserId = 2;
    return this.store.findAll('post');
  }
}
