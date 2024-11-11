import Model, { attr, belongsTo } from '@ember-data/model';

export default class CommentModel extends Model {
  @attr('number') postId;
  @attr('string') name;
  @attr('string') email;
  @attr('string') body;

  @belongsTo('post', { async: true, inverse: 'comments' }) post;
}
