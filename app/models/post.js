import Model from '@ember-data/model';
import { attr, hasMany } from '@ember-data/model';

export default class PostModel extends Model {
  @attr('number') userId;
  @attr('string') title;
  @attr('string') body;

  @hasMany('comment', { async: true, inverse: 'post' }) comments;
}
