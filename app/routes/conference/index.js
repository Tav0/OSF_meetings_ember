import Ember from 'ember';

export default Ember.Route.extend({
	previousTransition: null,
	deactivate: function() {
			var controller = this.get('controller');
			controller.send('cancel');
		},
	model(params) {
        return Ember.RSVP.hash({
            meeting: this.store.find('meeting', params.id) 
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
		}
	}
});
 
