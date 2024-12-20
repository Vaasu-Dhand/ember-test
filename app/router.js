import EmberRouter from '@ember/routing/router';
import config from 'ember-test/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('api');
  this.route('post', { path: '/posts' }, function () {
    this.route('comment', { path: '/:post_id/comments' });
  });
});
