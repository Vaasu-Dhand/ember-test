import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    return 'This data is automatically loaded into the route';
  }
}
