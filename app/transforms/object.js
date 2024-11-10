import { isBlank } from '@ember/utils';

export default class ObjectTransform {
  deserialize(value) {
    return isBlank(value) ? {} : value;
  }

  serialize(value) {
    return isBlank(value) ? {} : value;
  }

  static create() {
    return new this();
  }
}
