export default class JsonTransform {
  deserialize(serialized) {
    return serialized;
  }

  serialize(deserialized) {
    return deserialized;
  }

  static create() {
    return new this();
  }
}
