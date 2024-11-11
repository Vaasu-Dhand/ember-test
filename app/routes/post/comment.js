import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostCommentRoute extends Route {
  @service store;

  async model(params) {
    console.log('model params', params);

    return this.store.findAll('comment');
  }
}
