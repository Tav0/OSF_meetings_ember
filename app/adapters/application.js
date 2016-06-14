import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
    namespace: 'v2',
    host: 'https://staging-api.osf.io',
});