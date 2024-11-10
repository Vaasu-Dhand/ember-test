import { setupTest } from 'ember-test/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Transform | json', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const transform = this.owner.lookup('transform:json');
    assert.ok(transform, 'transform exists');
  });
});
