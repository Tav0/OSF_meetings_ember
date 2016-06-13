import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.createRecord('meeting');
	},
	actions: {
		back() {
			this.transitionTo('index').then(function(newRoute) {
				newRoute.controller.set('clickedCreate', false);
				newRoute.controller.set('titleError', false);
				newRoute.controller.set('visited', true);
			});
		}
	}
});
