//import OsfAdapter from './osf-adapter';
import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({

    namespace: 'api',
    host: 'http://localhost:8000',
    buildURL(modelName, id, snapshot, requestType) {
    // Fix issue where CORS request failed on 301s: Ember does not seem to append trailing
    // slash to URLs for single documents, but DRF redirects to force a trailing slash
    var url = this._super(...arguments);
    // var options = (snapshot ? snapshot.adapterOptions : false) || {};
    // if (requestType === 'deleteRecord' || requestType === 'updateRecord' || requestType === 'findRecord') {
    //   if (snapshot.record.get('links.self')) {
    //     url = snapshot.record.get('links.self');
    //   }
    // } else if (options.url) {
    //   url = options.url;
    // }

    if (url.lastIndexOf('/') !== url.length - 1) {
      url += '/';
    }
    return url;
  },
});
