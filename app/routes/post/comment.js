import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostCommentRoute extends Route {
  @service store;

  model(params) {
    const postId = params.post_id;

    console.log('Fetching posts for', postId);
    return this.store.query('comment', { postId });
  }
}
