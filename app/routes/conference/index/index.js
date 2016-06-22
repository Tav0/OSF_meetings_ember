import Ember from 'ember';

export default Ember.Route.extend({
	previousTransition: null,
	
	deactivate: function() {
			var controller = this.get('controller');
			controller.send('cancelEdits');
	},
	actions: {
		backToMeetings(){
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
		confirmLeave() {
			var controller = this.get('controller');
			controller.send('cancel');
			controller.set('navModal',false);
			this.get('previousTransition').retry();
		},
		declineLeave() {
			var controller = this.get('controller');
			controller.set('navModal',false);
		},
		submitTo() {
			this.transitionTo('conference.index.submission').then(function(newRoute) {
				newRoute.controller.setProperties({title: '', contributors: '', description: ''});
			});
			console.log('wtf');
		}
	}
});
 
