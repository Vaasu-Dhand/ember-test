// app/serializers/application.js
import RESTSerializer from '@ember-data/serializer/rest';

export default class ApplicationSerializer extends RESTSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    // If the payload is an array, wrap it in an object with the model name as key
    if (Array.isArray(payload)) {
      const modelName = primaryModelClass.modelName;
      payload = { [modelName]: payload };
    }

    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType,
    );
  }

  // This helps match camelCase properties in Ember with snake_case from API
  keyForAttribute(key) {
    return key;
  }
}
