import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
    namespace: 'v2',
    host: 'https://staging-api.osf.io',
    buildURL: function(type, id, record) {
    	//call the default buildURL and then append a slash
    	return this._super(type, id, record) + '/';
  	}
});