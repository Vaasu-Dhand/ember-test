import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

/**
 * @typedef {import('@ember-data/store').default} Store
 */

export default class ApplicationRoute extends Route {
  /**
   * @type {Store}
   */
  @service store;

  model() {
    return this.store.findAll('user');
  }
}
