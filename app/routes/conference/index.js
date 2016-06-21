import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
        return this.store.find('conference', params.conference_id);
	},
});
 
