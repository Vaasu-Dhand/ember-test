import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PostController extends Controller {
  @service flashMessages;

  @action
  async deletePost(post) {
    try {
      await post.destroyRecord();
      this.flashMessages.info(`Post:${post.id} deleted successfully`);
    } catch (error) {
      // Handle error
      console.error('Error deleting post:', error);
      this.flashMessages.danger(`Error deleting Post:${post.id}`);
    }
  }
}
