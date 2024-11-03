import Model, { attr } from '@ember-data/model';

export default class CommentModel extends Model {
  @attr('number') postId;
  @attr('string') name;
  @attr('string') email;
  @attr('string') body;
}
