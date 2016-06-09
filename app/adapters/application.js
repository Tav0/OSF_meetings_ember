import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    namespace: '',
    host: 'http://127.0.0.1:8000',
    ajax: function(url, method, hash) {
	    hash.crossDomain = true;
	    hash.xhrFields = {withCredentials: true};
	    return this._super(url, method, hash);
	  }
});
