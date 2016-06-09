import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
    namespace: '',
    host: 'http://127.0.0.1:8000',
    ajax: function(url, method, hash) {
	    hash.crossDomain = true;
	    hash.xhrFields = {withCredentials: true};
	    return this._super(url, method, hash);
	  }
});
