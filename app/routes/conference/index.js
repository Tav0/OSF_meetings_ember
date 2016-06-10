import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
        return Ember.RSVP.hash({
            nodes: this.store.findAll('node'),
            meeting: this.store.find('meeting', params.id),
        });
	},

	actions: {
		back(){
			this.transitionTo('index').then(function(newRoute) {
		      	newRoute.controller.set('clickedCreate', false);
        		newRoute.controller.set('titleError', false);
        		newRoute.controller.set('visited', true);
			})
		}
	}
});
 