import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.createRecord('submission-eval');
	},
	// submission: null,
	// total: Ember.computed.sum('submission.sda', submission.asd',)

	actions: {
		saveEvaluation(newEval) {
			var router = this;
			newEval.save().then( function() {
				router.transitionTo('reviews');
			});
		},
	}
});


// {{evaluation submission=model}}\

// {{submission.}}
// {{total}}