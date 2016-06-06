import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.createRecord('submission-eval');
	}
	// submission: null,
	// total: Ember.computed.sum('submission.sda', submission.asd',)

});


// {{evaulation submission=model}}\

// {{submission.}}
// {{total}}