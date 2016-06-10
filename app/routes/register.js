import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.createRecord('meeting');
	},
	actions: {
		create(newMeeting){
			var router = this;
			newMeeting.save().then(function(){
				router.transitionTo('index').then(function(newRoute) {
					newRoute.controller.set('clickedCreate', false);
					newRoute.controller.set('titleError', false);
					newRoute.controller.set('visited', true);
				});
			});
		},
		back() {
			this.transitionTo('index').then(function(newRoute) {
				newRoute.controller.set('clickedCreate', false);
				newRoute.controller.set('titleError', false);
				newRoute.controller.set('visited', true);
			})
		}
	}
});
