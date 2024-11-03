import Component from '@glimmer/component';
import { Changeset } from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import NumberValidations from '../validations/number';
import { action } from '@ember/object';

export default class Endpoint extends Component {
  constructor(...args) {
    super(...args);
    this.endpoint = '';
    this.changeset = new Changeset(
      { value: 1 }, // Default value
      lookupValidator(NumberValidations),
      NumberValidations,
    );
  }

  get parsedEndpoint() {
    const value =
      this.changeset.value > 0 && this.changeset.value <= 50
        ? this.changeset.value
        : '((error))';
    return this.args.endpoint.replace(/\/\d+/, `/${value}`);
  }

  get hasError() {
    return !!this.changeset.error.value?.validation;
  }

  get isLoading() {
    return false;
  }

  @action updateValue(_value) {
    this.changeset.set('value', _value);
    this.changeset.validate('value'); // Validate as user types
  }
}
