import Ember from 'ember';

export default Ember.Route.extend({
	previousTransition: null,
	deactivate: function() {
			var controller = this.get('controller');
			controller.send('cancel');
		},
	model(params) {
		// let mod = this.modelFor('conference.index');
		console.log(params);
        return Ember.RSVP.hash({
            conference: this.store.findRecord('conference', params.conference_id)
        });
	},
	actions: {
		back(){
			this.transitionTo('index').then(function(newRoute) {
        		newRoute.controller.set('visited', true);
			});			
		},
		willTransition: function(transition) {
			var controller = this.get('controller');
			if (controller.get('editing')) {
				transition.abort();
				controller.set('navModal',true);
				this.set('previousTransition',transition);
			}
		},
		leave() {
			var controller = this.get('controller');
			controller.send('cancel');
			controller.set('navModal',false);
			this.get('previousTransition').retry();
		},
		stay() {
			var controller = this.get('controller');
			controller.set('navModal',false);
		},
		submitTo() {
			this.transitionTo('conference.index.submission').then(function(newRoute) {
				newRoute.controller.setProperties({'access': true, title: '', contributors: '', description: ''});
			});
		}
	}
});
 
