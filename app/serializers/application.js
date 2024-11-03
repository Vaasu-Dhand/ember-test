// app/serializers/application.js
import RESTSerializer from '@ember-data/serializer/rest';

export default class ApplicationSerializer extends RESTSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const modelName = primaryModelClass.modelName;

    if (requestType === 'findRecord' && !Array.isArray(payload)) {
      // Wrap the single object response in an object with the model name as the key
      payload = { [modelName]: payload };
    } else if (Array.isArray(payload)) {
      // For array responses, wrap in the model name for consistency
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

  keyForAttribute(key) {
    return key;
  }
}
