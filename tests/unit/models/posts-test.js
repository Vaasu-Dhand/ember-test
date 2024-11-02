import { setupTest } from 'ember-test/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | posts', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('posts', {});
    assert.ok(model, 'model exists');
  });
});
