import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class PostsModel extends Model {
  @attr('number') userId;
  @attr('number') id;
  @attr('string') title;
  @attr('string') body;
}
